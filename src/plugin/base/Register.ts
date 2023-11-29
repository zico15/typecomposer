import { ClassInfo, FileInfo } from "./ProjectBuild";

export interface RegisterOptions {
    tag?: string;
    templateUrl?: string;
    extends?: string;
}

export class RegisterBuild {

    private static converClasNameToTag(className: string | undefined): string {
        if (className == undefined)
            return `base-${Math.random().toString(36).substring(7)}-element`;
        let name = className.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/(\d+)([A-Z])/g, '$1-$2').toLowerCase()
        if (!name.includes("-"))
            name = name + "-element";
        return name
    }

    private static readRegister(fileInfo: FileInfo, classInfo: ClassInfo) {
        const decorators = classInfo.classDeclaration.getDecorators();
        const register = decorators.find(e => e.getName() == "Register");
        const registerArgs = register?.getArguments().map(arg => arg.getText().replace(/,(?=\s*})/, '')).join(", ").replace(/(\w+):/g, '"$1":');

        if (register)
            fileInfo.removeDatas.push(register.getText());
        try {
            classInfo.registerOptions = JSON.parse(registerArgs || "{}");
        } catch (error) {
        }
        if (classInfo.registerOptions.tag == undefined)
            classInfo.registerOptions.tag = this.converClasNameToTag(classInfo.className);
    }

    public static injectTag(fileInfo: FileInfo, classInfo: ClassInfo) {
        const tag = classInfo.registerOptions.tag;
        const line = `customElements.define("${tag}", ${classInfo.classDeclaration.getName()}, ${classInfo.registerOptions?.extends ? '{ extends: "' + classInfo.registerOptions.extends + '" }' : "undefined"});`;
        if (!fileInfo.sourceFile.getText().includes(line)) {
            fileInfo.sourceFile.insertText(classInfo.classDeclaration.getEnd(), `\n${line}`);
        }
    }

    public static async anliyze(fileInfo: FileInfo) {
        for await (const classInfo of fileInfo.classes) {
            this.readRegister(fileInfo, classInfo);
        }
    }
}