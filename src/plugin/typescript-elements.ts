import { Plugin } from 'vite';
import { ComponentDefinitionOptions } from 'typecompose';
import { ClassDeclaration, Project, PropertyDeclaration, SourceFile } from 'ts-morph';
import * as fs from 'fs';
import { readReference } from './base/Reference';
import * as path from 'path';
import { ComponentEdit } from './base/Component';
import { TemplateController } from './base/Template';
import { StyleController } from './base/Style';

export interface EmittedAsset {
    fileName?: string;
    name?: string;
    needsCodeReference?: boolean;
    source?: string | Uint8Array;
    type: 'asset';
}

const registers: string[] = [];
const templates = new Map<string, string>();


export default function typeComposePlugin(options = {}): Plugin {
    let project = new Project();

    return {
        name: 'typescript-elements',
        enforce: 'pre',
        configureServer(server: any) {
            console.log('config:');

            server.watcher.on('custom-reload', (path: string) => {
                console.log('custom-reload:', path);
                server.ws.send({
                    type: 'full-reload',
                    path,
                });
            });

            // Faça alguma coisa com a configuração do Vite
        },
        buildStart() {
            // this.emitFile(StyleController.craeteFile() as any);
            console.log('buildStart:');
        },
        generateBundle(options, bundle) {

        },
        writeBundle(options, bundle) {

        },
        async configResolved(config) {
            StyleController.clear();
            const projectDir = config.root || process.cwd();
            project = new Project();
            // Carregar todas as classes quando a configuração do Vite está sendo resolvida
            project.addSourceFilesAtPaths(path.join(projectDir, 'src/**/*.ts'));
        },
        async load(id) {
            return null;
        },
        async resolveId(id, importer) {
            return null;
        },
        async handleHotUpdate({ file, server }) {
            if (file.endsWith('.html')) {
                for (const [key, value] of templates.entries()) {
                    if (file.includes(value)) {
                        const data = fs.readFileSync(key, 'utf-8');
                        fs.writeFileSync(key, data);
                    }
                }
            }
        },
        async transform(code, id) {
            if (id.endsWith('.ts')) {
                code = readRegister(id, code, project, project.createSourceFile(id, code, { overwrite: true }));
            }
            return code;
        },
    };
}

export function readRegister(id: string, code: string, project: Project, sourceFile?: SourceFile): string {
    sourceFile = sourceFile != undefined ? sourceFile : project.createSourceFile("temp.ts", code, { overwrite: true });
    registers.length = 0;
    for (let i = 0; i < sourceFile.getClasses().length; i++)
        updateClass(id, project, sourceFile, sourceFile.getClasses()[i]);
    return sourceFile.getFullText().replace(registers.join("\n"), "");
}

function updateClass(id: string, project: Project, sourceFile: SourceFile, classDeclaration: ClassDeclaration) {

    const decorators = classDeclaration.getDecorators();
    const register = decorators.find(e => e.getName() == "Register");
    const registerArgs = register?.getArguments().map(arg => arg.getText().replace(/,(?=\s*})/, '')).join(", ").replace(/(\w+):/g, '"$1":');
    const isComponent = ComponentEdit.checkIsComponent(project, classDeclaration);
    let component: ComponentEdit | undefined = ComponentEdit.components.get(id);

    let options = {};
    try {
        options = JSON.parse(registerArgs || "{}");
    } catch (error) {
    }
    if (component == undefined && (register || isComponent)) {
        component = new ComponentEdit(id, project, sourceFile, classDeclaration, options);
        ComponentEdit.components.set(id, component);
    }
    else if (component != undefined && !(register || isComponent)) {
        ComponentEdit.components.delete(id);
        component = undefined;
    }
    if (component) {
        component.update(sourceFile, classDeclaration, options);
        if (register)
            registers.push(register.getText());
        readTemplateAndReferencies(id, sourceFile, classDeclaration, options, component);
        readReference(sourceFile, classDeclaration, component);
        if (isComponent || register)
            ComponentEdit.injectTag(component);
    }
}

function readTemplateAndReferencies(id: string, sourceFile: SourceFile, classDeclaration: ClassDeclaration, options: ComponentDefinitionOptions, component: ComponentEdit) {
    const referencies: { ref: string, name: string; }[] = [];
    const propertyDeclarations: PropertyDeclaration[] = classDeclaration.getProperties();

    for (let i = 0; i < propertyDeclarations.length; i++) {
        const property = propertyDeclarations[i];
        const propertyDecorators = [...property.getDecorators()];
        propertyDecorators.forEach(decorator => {
            if ("RefComponent" == decorator.getName()) {
                let ref = decorator.getArguments().map(arg => arg.getText()).join(", ").replace(/(\w+):/g, '"$1":');
                if (ref.includes("{") && ref.includes("}"))
                    ref = JSON.parse(ref)?.id || property.getName();
                else
                    ref = ref.replace(/"/g, "") || property.getName();
                const name = property.getName();
                referencies.push({ ref, name });
            }
        });
    }
    injectDataSuper(id, classDeclaration, options, referencies, component);
    injectFunctions(sourceFile, classDeclaration);
}

async function injectDataSuper(id: string, classDeclaration: ClassDeclaration,
    options: ComponentDefinitionOptions,
    referencies: { ref: string, name: string; }[],
    component: ComponentEdit
) {
    try {
        let injectedLine = "";
        let templateUrl = undefined
        if (classDeclaration.getName() == "Description") {
            if (options?.templateUrl == undefined) {
                options["templateUrl"] = classDeclaration.getSourceFile().getFilePath().replace(classDeclaration.getSourceFile().getBaseName(), `${classDeclaration.getName()}.html`);
                if (!fs.existsSync(options["templateUrl"]))
                    options["templateUrl"] = undefined;
                templateUrl = options["templateUrl"];
            }
        }
        if (options?.templateUrl != undefined) {
            templateUrl = templateUrl || options.templateUrl.includes("src/") ? options.templateUrl : "src/" + options.templateUrl;
            const newTemplateUrl = templateUrl || id.replace(/\\/g, '/').split('/src/')[0] + '/' + templateUrl;
            templates.set(id, newTemplateUrl);
            let html = fs.readFileSync(newTemplateUrl, 'utf-8');
            html = TemplateController.read(html);
            html = StyleController.read(component, component.tag, html);
            injectedLine = `this.innerHTML = \`${html}\`;`;
        }
        if (referencies.length > 0) {
            referencies.forEach((e: { ref: string; name: string; }) => {
                injectedLine += `\nthis.${e.name} = this.querySelector("#${e.ref}");`;
            });
        }

        let constructorDeclaration = classDeclaration.getConstructors()[0];
        if (constructorDeclaration == undefined) {
            constructorDeclaration = classDeclaration.addConstructor();
            if (classDeclaration.getExtends()) {
                constructorDeclaration.insertStatements(0, writer => {
                    writer.write("super();");
                });
            }
        }
        if (injectedLine != "")
            constructorDeclaration.insertStatements(1, writer => {
                writer.write(injectedLine);
            });
    }
    catch (__) {
    }
}

function injectFunctions(sourceFile: SourceFile, classDeclaration: ClassDeclaration) {
    const connectedCallback = classDeclaration.getMethod("connectedCallback") || classDeclaration.addMethod({
        name: "connectedCallback",
        isAsync: false,
        isStatic: false,
        returnType: "void",
        statements: [],
        parameters: []
    });
    connectedCallback?.insertStatements(0, 'this.onInit();');

    const disconnectedCallback = classDeclaration.getMethod("disconnectedCallback") || classDeclaration.addMethod({
        name: "disconnectedCallback",
        isAsync: false,
        isStatic: false,
        returnType: "void",
        statements: [],
        parameters: []
    });
    disconnectedCallback?.insertStatements(0, 'this.unmount?.(); this._styleRef?.disconnectedCallback();this.removeEvents?.();');
}
