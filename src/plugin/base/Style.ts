
import { ComponentEdit } from './Component';
import * as fs from 'fs';



export class StyleController {

    // private static virtualPath: string = "/src/assets/styles/style-base.scss";

    public static read(component: ComponentEdit, tag: string, html: string): string {
        const styles = html.match(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/g);
        let styleEdite: boolean = component?.styles.length > 0 || false;
        component.styles = [];
        if (styles != undefined) {
            styles.forEach((style, index) => {
                const styleTag = style.split(">")[0];
                if (tag != "" && !styleTag.includes("global")) {
                    style = style.replace(`>`, `>\n${tag} {`);
                    style = style.replace(`</style>`, `}</style>`);
                    html = html.replace(styles[index], "");
                    style = style.split(">\n")[1]
                    style = style.split("</style>")[0]

                    component.styles.push(style);
                }
            });
            styleEdite = true;
        }
        if (styleEdite || true) {
            StyleController.update(Array.from(ComponentEdit.components.values())).then((code: string) => {
            });
        }
        return html;
    }

    private static async update(components: ComponentEdit[]): Promise<any> {
        let code = "";
        // for await (const component of components) {
        //     if (component.styles.length > 0)
        //         code += `\n${component.styles.join("\n")}`;
        // }
        // const path = process.cwd() + StyleController.virtualPath;
        // const fd = fs.openSync(path, 'w');

        // fs.writeSync(fd, code);
        // fs.close(fd);
        return code;
    }


    public static async clear(): Promise<any> {

        // const path = process.cwd() + StyleController.virtualPath;
        // const fd = fs.openSync(path, 'w');

        // fs.writeSync(fd, "");
        // fs.close(fd);

    }

}
