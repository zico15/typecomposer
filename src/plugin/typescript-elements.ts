import { Plugin, ViteDevServer } from 'vite';
import { ProjectBuild } from './base/ProjectBuild';

export interface EmittedAsset {
    fileName?: string;
    name?: string;
    needsCodeReference?: boolean;
    source?: string | Uint8Array;
    type: 'asset';
}

export interface PwaManifest {
    name: string;
    short_name: string;
    description: string;
    start_url: string;
    display: string;
    background_color: string;
    theme_color: string;
    icons: {
        src: string;
        sizes: string;
        type: string;
    }[];
}

export interface TypeComposeOptions {
    build?: {
        pwd?: PwaManifest;
    };
}

export default function typeComposePlugin(options: TypeComposeOptions = {}): Plugin {
    let project: any;

    return {
        name: 'typescript-elements',
        enforce: 'pre',
        configureServer(server: ViteDevServer) {
            console.log('config:');
            project = new ProjectBuild(server);
        },
        async buildStart() {
            console.log('buildStart:');
        },
        generateBundle(options, bundle) {

        },
        writeBundle(options, bundle) {

        },
        async configResolved(config) {
            // StyleBuild.clear();
        },
        async load(id) {
            if (id.includes("base/style-base.scss")) {
                console.log('load:', id);
                return project.styleCode;
            }
            return null;
        },
        async resolveId(id, importer) {
            if (id.includes("base/style-base.scss")) {
                // const code = `
                // body {
                //     background-color: red !important;
                // };`
                // // Retorne o ID do módulo virtual
                const virtualId = `virtual:${id}`;
                console.log('resolveId:', id, virtualId);
                return {
                    id: virtualId
                    , external: true, contents: project.styleCode
                };
            }
        },
        async handleHotUpdate({ file, server }) {
            if (file.endsWith('.html')) {
                for await (const fileInfo of project.files.values()) {
                    if (fileInfo.templatesUrl.length > 0 && fileInfo.templatesUrl.includes(file)) {
                        project.sendServerUpdate(fileInfo);
                    }
                }
            }

            // const module = server.moduleGraph.getModuleById("virtual:/base/style-base.scss?direct");
            // console.log('module: ', module);
            // if (module && module.transformResult) {
            //     console.log('handleHotUpdate:', module.transformResult.code);
            //     project.server.moduleGraph.invalidateModule(module);
            // }


        },
        async transform(code, path) {
            if (path.endsWith('.ts')) {
                code = await project.analyze(path, code);
            }
            return code;
        },
    };
}


