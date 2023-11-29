import { ClassDeclaration, Decorator, Project, SourceFile } from 'ts-morph';
import { RegisterBuild, RegisterOptions } from './Register';
import { TemplateBuild } from './Template';

export interface ClassInfo {
    className: string | undefined;
    extends: string | undefined;
    decorators: string[];
    imports: string;
    isComponent: boolean;
    classDeclaration: ClassDeclaration;
    registerOptions: RegisterOptions;
    constructorDatas: string[];
}

export interface FileInfo {
    sourceFile: SourceFile;
    classes: ClassInfo[];
    removeDatas: string[];
}

export class ProjectBuild extends Project {

    public files: Map<string, FileInfo> = new Map<string, FileInfo>();
    public path: string;

    constructor() {
        super();
        this.addSourceFilesAtPaths('**/*.ts');
        this.path = this.getSourceFiles().find(e => e.getFilePath().includes("node_modules/typecompose-plugin"))?.getFilePath() || "";
        if (this.path != "")
            this.path = this.path.split("node_modules/typecompose-plugin/")[0] + "node_modules/typecompose-plugin/";
    }

    public async analyze(path: string, code: string): Promise<string> {
        const sourceFile = this.createSourceFile('dummy.ts', code, { overwrite: true });
        const fileInfo: FileInfo = this.files.get(path) || { sourceFile: sourceFile, classes: [], removeDatas: [] };
        const classes = sourceFile.getClasses();
        console.log('Path:', sourceFile.getFilePath());
        fileInfo.sourceFile = sourceFile;
        fileInfo.removeDatas = [];
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
            RegisterBuild.injectTag(fileInfo, classInfo);
        }
        let code = fileInfo.sourceFile.getFullText();
        for await (const data of fileInfo.removeDatas) {
            code = code.replace(data, "");
        }
        console.log(fileInfo.removeDatas);
        fileInfo.removeDatas.length = 0;
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
}
