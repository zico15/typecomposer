import { ClassInfo, FileInfo } from "./ProjectBuild";
import { PropertyDeclaration } from 'ts-morph';
import { StyleBuild } from "./Style";
import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, join, normalize } from "node:path";


export interface RefComponentOptions {
    ref: string,
    name: string;
}


export class TemplateBuild {

    private static bases: string[] = ["div", "p", "a", "img", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "span", "strong", "em", "br", "hr", "table", "tr", "th", "td", "form", "input", "button", "textarea", "label", "select", "iframe", "audio", "video", "canvas", "svg", "footer", "header", "nav", "main", "section", "article", "details", "summary"];

    public static read(html: string): string {
        for (let i = 0; i < TemplateBuild.bases.length; i++) {
            const base = TemplateBuild.bases[i];
            html = html.replaceAll(`<${base}`, `<${base} is="base-${base}-element" `);
        }
        return html.replace(/<!--[\s\S]*?-->/g, '');
    }

    private static getTemplateUrl(fileInfo: FileInfo, classInfo: ClassInfo, templateUrl?: string): string | undefined {
        if (templateUrl)
            templateUrl = templateUrl?.includes("src/") ? classInfo.registerOptions.templateUrl : "src/" + classInfo.registerOptions.templateUrl;
        if (templateUrl == undefined)
            templateUrl = join(dirname(fileInfo.path), `${basename(fileInfo.path, '.ts')}.html`);
        if (templateUrl == undefined)
            return undefined;
        templateUrl = normalize(templateUrl);
        console.log("normalize: ", normalize(templateUrl), " => ", existsSync(templateUrl));
        if (templateUrl == undefined || !existsSync(templateUrl))
            return undefined;
        return templateUrl;
    }

    private static async readHtml(fileInfo: FileInfo, classInfo: ClassInfo, templateUrl?: string) {
        if (templateUrl == undefined)
            return;
        try {
            let html = readFileSync(templateUrl, 'utf-8');
            for (let i = 0; i < TemplateBuild.bases.length; i++) {
                const base = TemplateBuild.bases[i];
                html = html.replaceAll(`<${base}`, `<${base} is="base-${base}-element" `);
            }
            html = html.replace(/<!--[\s\S]*?-->/g, '');
            html = StyleBuild.read(classInfo, html);
            classInfo.constructorDatas.push(`this.innerHTML = \`${html}\`;`);
            fileInfo.templatesUrl.push(templateUrl);
            return html;
        } catch (error) {
            return undefined;
        }
    }

    private static async readRefComponent(fileInfo: FileInfo, classInfo: ClassInfo, templateUrl?: string) {
        const propertyDeclarations: PropertyDeclaration[] = classInfo.classDeclaration.getProperties();
        for (let i = 0; i < propertyDeclarations.length; i++) {
            const property = propertyDeclarations[i];
            const propertyDecorators = [...property.getDecorators()];
            propertyDecorators.forEach(decorator => {
                if ("RefComponent" == decorator.getName()) {
                    if (templateUrl != undefined) {
                        let ref = decorator.getArguments().map(arg => arg.getText()).join(", ").replace(/(\w+):/g, '"$1":');
                        if (ref.includes("{") && ref.includes("}"))
                            ref = JSON.parse(ref)?.id || property.getName();
                        else
                            ref = ref.replace(/"/g, "") || property.getName();
                        const name = property.getName();
                        classInfo.constructorDatas.push(`this.${name} = this.querySelector("#${ref}");`);
                    }
                    fileInfo.removeDatas.push(decorator.getText());
                }
            });
        }
    }

    public static async anliyze(fileInfo: FileInfo) {
        for await (const classInfo of fileInfo.classes) {
            classInfo.registerOptions.templateUrl = this.getTemplateUrl(fileInfo, classInfo, classInfo.registerOptions?.templateUrl);
            await this.readHtml(fileInfo, classInfo, classInfo.registerOptions?.templateUrl);
            await this.readRefComponent(fileInfo, classInfo, classInfo.registerOptions?.templateUrl);
            // if (classInfo.registerOptions.template)
        }
    }

}