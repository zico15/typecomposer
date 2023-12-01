import { ClassInfo, FileInfo, ProjectBuild } from './ProjectBuild';

export class StyleBuild {

    public static read(classInfo: ClassInfo, html: string): string {
        const styles = html.match(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/g);
        classInfo.styles = [];
        if (styles != undefined) {
            styles.forEach((style, index) => {
                const styleTag = style.split(">")[0];
                if (classInfo.registerOptions.tag != "" && !styleTag.includes("global")) {
                    style = style.replace(`>`, `>\n${classInfo.registerOptions.tag} {`);
                    style = style.replace(`</style>`, `}</style>`);
                    html = html.replace(styles[index], "");
                    style = style.split(">\n")[1]
                    style = style.split("</style>")[0]
                    classInfo.styles.push(style);
                }
            });
        }
        return html;
    }

    public static async build(project: ProjectBuild): Promise<any> {
        project.styleCode = "";
        const fileInfos: FileInfo[] = Array.from(project.files.values())
        for await (const fileInfo of fileInfos) {
            for await (const classInfo of fileInfo.classes) {
                if (classInfo.styles.length > 0)
                    project.styleCode += `\n${classInfo.styles.join("\n")}`;
            }
        }
        // const module = project.server.moduleGraph.getModuleById("virtual:/base/style-base.scss?direct");
        // if (module && module.transformResult) {
        //     project.server.moduleGraph.invalidateModule(module);
        // }
        // console.log('StyleBuild',);
        return project.styleCode;
    }

}
