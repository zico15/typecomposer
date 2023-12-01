import { ClassDeclaration, Decorator, Project, SourceFile } from 'ts-morph';
import { RegisterBuild, RegisterOptions } from './Register';
import { TemplateBuild } from './Template';
import { StyleBuild } from './Style';
import { utimesSync } from 'node:fs';

export interface ClassInfo {
    className: string | undefined;
    extends: string | undefined;
    decorators: string[];
    imports: string;
    isComponent: boolean;
    classDeclaration: ClassDeclaration;
    registerOptions: RegisterOptions;
    constructorDatas: string[];
    styles: string[];
}

export interface FileInfo {
    path: string;
    sourceFile: SourceFile;
    classes: ClassInfo[];
    removeDatas: string[];
    templatesUrl: string[];
}

export class ProjectBuild extends Project {

    public files: Map<string, FileInfo> = new Map<string, FileInfo>();
    public path: string;
    public stylePath: string;
    public styleCode: string = "";

    constructor() {
        super();
        this.addSourceFilesAtPaths('**/*.ts');
        this.path = this.getSourceFiles().find(e => e.getFilePath().includes("node_modules/typecompose-plugin"))?.getFilePath() || "";
        if (this.path != "")
            this.path = this.path.split("node_modules/typecompose-plugin/")[0] + "node_modules/typecompose-plugin/";
        this.stylePath = this.path + "styles/style-base.scss";
    }

    public async analyze(path: string, code: string): Promise<string> {
        const sourceFile = this.createSourceFile('dummy.ts', code, { overwrite: true });
        const fileInfo: FileInfo = this.files.get(path) || { sourceFile: sourceFile, classes: [], removeDatas: [], path: path, templatesUrl: [] };
        const classes = sourceFile.getClasses();
        console.log('Path:', sourceFile.getFilePath());
        fileInfo.sourceFile = sourceFile;
        fileInfo.removeDatas = [];
        fileInfo.path = path;
        fileInfo.templatesUrl = [];
        fileInfo.classes = classes.map((classDeclaration: ClassDeclaration) => {
            return this.getClassInofo(sourceFile, classDeclaration);
        }).filter((classInfo: ClassInfo) => classInfo.isComponent);
        await RegisterBuild.anliyze(fileInfo);
        await TemplateBuild.anliyze(fileInfo);
        this.files.set(path, fileInfo);
        // console.log('Analyze:', fileInfo);
        return await this.build(fileInfo);
    }

    private async build(fileInfo: FileInfo) {
        for await (const classInfo of fileInfo.classes) {
            this.insertConstructorDatas(classInfo);
            this.injectFunctions(fileInfo.sourceFile, classInfo.classDeclaration);
            RegisterBuild.injectTag(fileInfo, classInfo);
        }
        let code = fileInfo.sourceFile.getFullText();
        for await (const data of fileInfo.removeDatas) {
            code = code.replace(data, "");
        }
        console.log(fileInfo.removeDatas);
        fileInfo.removeDatas.length = 0;
        await StyleBuild.build(this);
        return code;
    }

    public getClassInofo(sourceFile: SourceFile, classDeclaration: ClassDeclaration): ClassInfo {
        const className = classDeclaration.getName();
        const extendsClause = classDeclaration.getExtends()?.getText();
        const decorators = classDeclaration.getDecorators()?.map((decorator: Decorator) => decorator.getText()) || [];
        return {
            className,
            extends: extendsClause,
            decorators: decorators,
            imports: JSON.stringify(this.getImportInfo(sourceFile)),
            isComponent: this.checkIsComponent(classDeclaration),
            classDeclaration: classDeclaration,
            registerOptions: {},
            constructorDatas: [],
            styles: []
        };
    }

    public isClassFromModule(classDeclaration: ClassDeclaration, moduleName: string): boolean {
        const sourceFile = classDeclaration.getSourceFile();
        return sourceFile.getImportDeclarations().some((importDeclaration) => {
            return importDeclaration.getNamedImports().some((namedImport) => {
                return namedImport.getText() === classDeclaration.getName() && importDeclaration.getModuleSpecifierValue() === moduleName;
            });
        });
    }

    private checkImplementsComponent(sourceFile: SourceFile, classDeclaration: ClassDeclaration): boolean {

        if (sourceFile && classDeclaration && classDeclaration.getImplements().map(e => e.getText()).includes('IComponent')) {
            const i = sourceFile.getFilePath();
            if (i.includes("node_modules/typecompose"))
                return true;
        }
        return false;
    }

    public checkIsComponent(classDeclaration: ClassDeclaration): boolean {
        if (classDeclaration == undefined)
            return false;
        if (this.checkImplementsComponent(classDeclaration.getSourceFile(), classDeclaration))
            return true;
        if (classDeclaration) {
            const extendsClause = classDeclaration.getHeritageClauses()[0]; // Considerando apenas a primeira cláusula "extends"
            const extendsTypeNode = extendsClause ? extendsClause.getTypeNodes()[0] : undefined;

            if (extendsTypeNode) {
                const extendedClassName = extendsTypeNode.getText();
                const extendedClassDeclaration = this.getSourceFiles().find(sourceFile => sourceFile.getClass(extendedClassName))?.getClass(extendedClassName);
                if (extendedClassDeclaration)
                    return this.checkIsComponent(extendedClassDeclaration);
            }
        }
        return false;
    }

    getImportInfo(sourceFile: SourceFile) {
        const imports = sourceFile.getImportDeclarations().map((importDeclaration) => {
            const moduleSpecifier: string = importDeclaration.getModuleSpecifierValue();
            const namedImports: string[] = importDeclaration.getNamedImports().map((namedImport) => namedImport.getText());
            return { moduleSpecifier: moduleSpecifier, namedImports: namedImports };
        });
        return imports;
    }

    private insertConstructorDatas(classInfo: ClassInfo) {
        const classDeclaration: ClassDeclaration = classInfo.classDeclaration;
        try {
            let constructorDeclaration = classDeclaration.getConstructors()[0];
            if (constructorDeclaration == undefined) {
                constructorDeclaration = classDeclaration.addConstructor();
                if (classDeclaration.getExtends()) {
                    constructorDeclaration.insertStatements(0, writer => {
                        writer.write("super();");
                    });
                }
            }
            const injectedLine = classInfo.constructorDatas.join("\n");
            console.log("injectedLine: ", injectedLine);
            if (injectedLine != "")
                constructorDeclaration.insertStatements(1, writer => {
                    writer.write(injectedLine);
                });
        }
        catch (__) {
            console.log("Error: ", __);
        }
    }

    private injectFunctions(sourceFile: SourceFile, classDeclaration: ClassDeclaration) {
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

    public sendServerUpdate(fileInfo: FileInfo) {
        const now = new Date();
        utimesSync(fileInfo.path, now, now);
    }
}
