import { ClassDeclaration, SourceFile, VariableDeclaration } from "ts-morph";
import { ComponentEdit } from "./Component";

export function readReference(sourceFile: SourceFile, classDeclaration: ClassDeclaration, component?: ComponentEdit) {
    if (classDeclaration.getName() == "Description") {

        const allVariables: VariableDeclaration[] = [];


        // Obter variáveis dos métodos da classe
        // classDeclaration.getProperties().forEach(property => {
        //     // if (VariableDeclaration.isVariableDeclaration(property)) {
        //     // const type = property.getType().getText().trim();
        //     // if (type.includes("Ref") || property.getDecorators().find(e => e.getName() == "Ref")) {
        //     //     console.log('Variável:', type);
        //     // }
        //     // }
        // })
        // console.log('=============================');



        // allVariables.forEach(variable => {
        //     console.log(`Nome: ${variable.getName()}, Tipo: ${variable.getType().getText()}, Inicialização: ${variable.getInitializer()?.getText()}`);
        // });


    }

}