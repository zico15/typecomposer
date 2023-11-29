import { ClassInfo, FileInfo } from "./ProjectBuild";
import { PropertyDeclaration } from 'ts-morph';

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

    public static readHtml(html: string): string {
        for (let i = 0; i < TemplateBuild.bases.length; i++) {
            const base = TemplateBuild.bases[i];
            html = html.replaceAll(`<${base}`, `<${base} is="base-${base}-element" `);
        }
        return html.replace(/<!--[\s\S]*?-->/g, '');
    }

    private static async readRefComponent(fileInfo: FileInfo, classInfo: ClassInfo, template?: string): Promise<RefComponentOptions[]> {
        const referencies: RefComponentOptions[] = [];
        const propertyDeclarations: PropertyDeclaration[] = classInfo.classDeclaration.getProperties();
        for (let i = 0; i < propertyDeclarations.length; i++) {
            const property = propertyDeclarations[i];
            const propertyDecorators = [...property.getDecorators()];
            propertyDecorators.forEach(decorator => {
                if ("RefComponent" == decorator.getName()) {
                    if (template != undefined) {
                        let ref = decorator.getArguments().map(arg => arg.getText()).join(", ").replace(/(\w+):/g, '"$1":');
                        if (ref.includes("{") && ref.includes("}"))
                            ref = JSON.parse(ref)?.id || property.getName();
                        else
                            ref = ref.replace(/"/g, "") || property.getName();
                        const name = property.getName();
                        referencies.push({ ref, name });
                    }
                    fileInfo.removeDatas.push(decorator.getText());
                }
            });
        }
        console.log("readTemplate:", classInfo.className, "isTemplate: ", template != undefined, referencies);
        return referencies;
    }

    public static async anliyze(fileInfo: FileInfo) {
        for await (const classInfo of fileInfo.classes) {
            this.readRefComponent(fileInfo, classInfo, classInfo.registerOptions?.template);
            // if (classInfo.registerOptions.template)
        }
    }

}