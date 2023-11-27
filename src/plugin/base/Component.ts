import { ComponentDefinitionOptions } from "typecompose";
import { ClassDeclaration, Project, SourceFile } from "ts-morph";


export class ComponentEdit {

    public path: string = "";
    public template: string | undefined;
    public styles: string[] = [];
    public tag: string = "";
    public static components = new Map<string, ComponentEdit>();

    constructor(
        public id: string,
        public project: Project,
        public sourceFile: SourceFile,
        public classDeclaration: ClassDeclaration,
        public options: ComponentDefinitionOptions
    ) {
        this.update(sourceFile, classDeclaration, options);
    }

    update(sourceFile: SourceFile, classDeclaration: ClassDeclaration, options: ComponentDefinitionOptions) {
        this.sourceFile = sourceFile;
        this.classDeclaration = classDeclaration;
        this.options = options;
        this.tag = options?.tag || ComponentEdit.converClasNameToTag(classDeclaration.getName() || "");
        this.path = classDeclaration.getSourceFile().getFilePath();
    }

    toString() {
        return this.id;
    }

    public static converClasNameToTag(className: string): string {
        let name = className.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/(\d+)([A-Z])/g, '$1-$2').toLowerCase()
        if (!name.includes("-"))
            name = name + "-element";
        return name
    }

    public static injectTag(component: ComponentEdit) {
        const tag = component.tag;
        const line = `customElements.define("${tag}", ${component.classDeclaration.getName()}, ${component.options?.extends ? '{ extends: "' + component.options.extends + '" }' : "undefined"});`;
        if (!component.sourceFile.getText().includes(line))
            component.sourceFile.insertText(component.classDeclaration.getEnd(), `\n${line}`);
    }

    public static checkIsComponent(project: Project, classDeclaration: ClassDeclaration | undefined): boolean {
        let className = classDeclaration?.getName() || "";
        while (classDeclaration != undefined) {
            const classImplements = classDeclaration?.getImplements().map(e => e.getText()) || [];
            if (className == "Component" && classImplements.includes("IComponent"))
                return true;
            if (classDeclaration.getExtends() == undefined || classDeclaration.getExtends()?.getFirstChild() == undefined)
                return false;
            className = classDeclaration.getExtends()?.getFirstChild()?.getText() || "";
            if (className != undefined)
                classDeclaration = project.getSourceFiles().find(e => e.getClass(className))?.getClass(className) || undefined;
        }
        return false;
    }

}