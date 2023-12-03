import { readFileSync, writeFileSync } from 'node:fs';
import type { Plugin, ResolvedConfig } from 'vite'
import { sw } from './serviceWorker';
import { PWAManifest } from './types';
import { register } from './register';


export interface PWDOptions {
    manifest?: PWAManifest | "auto";
    ignoreFiles?: string[];
}


async function injectServiceWorker(config: ResolvedConfig, options: PWDOptions, indexjs: string) {
    let html = readFileSync(`${config.build.outDir}/index.html`, 'utf-8')
    const registerSw = register(options, indexjs);
    html = html.replace('</head>',
        `<link rel="manifest" href="./manifest.webmanifest" />
        <script type="module" src="/${registerSw.fileName}"></script>
        </head>`
    )

    // console.log('html', html)
    writeFileSync(`${config.build.outDir}/index.html`, html)
    writeFileSync(`${config.build.outDir}/${registerSw.fileName}`, registerSw.code)
    // create service worker
    const file = sw(config, options);
    writeFileSync(`${config.build.outDir}/${file.fileName}`, file.code)
}

export function autoManifest(config: ResolvedConfig): PWAManifest | undefined {
    return undefined
}

export function PwaBuildPlugin(options: PWDOptions): Plugin {
    let config: ResolvedConfig | undefined = undefined
    let files: string[] = []
    let indexjs: string | undefined = undefined
    const transformIndexHtmlHandler = (html: string) => {
        // const { options, useImportRegister } = ctx
        // if (options.disable)
        //   return html

        // // if virtual register is requested, do not inject.
        // if (options.injectRegister === 'auto')
        //   options.injectRegister = useImportRegister ? null : 'script'

        // return injectServiceWorker(html, options, false)
        console.log('transformIndexHtmlHandler')
        console.log('html', html)
    }

    return {
        name: 'typecompose:pwa',
        enforce: 'post',
        apply: 'build',
        transformIndexHtml: {
            order: 'post',
            handler(html) {
                return transformIndexHtmlHandler(html)
            },
            enforce: 'post', // deprecated since Vite 4
            async transform(html) { // deprecated since Vite 4
                return transformIndexHtmlHandler(html)
            },
        },
        configResolved(_config) {
            config = _config
            if (options.manifest === 'auto')
                options.manifest = autoManifest(config)
            // Acesso ao caminho do diretório de saída (outDir)
            const caminhoDoBuild: ResolvedConfig = config;

            console.log('Caminho do diretório de build:', caminhoDoBuild);
        },
        generateBundle(n, bundle) {
            files = Object.keys(bundle)
            for (const key in bundle) {
                if (bundle[key].type == 'chunk')
                    indexjs = bundle[key].fileName
                console.log('bundle', bundle[key].fileName, bundle[key].type)
            }
        },
        closeBundle: {
            sequential: true,
            order: 'post',
            async handler() {
                if (options.manifest && config && indexjs) {
                    console.log('generateBundle: \n', files);
                    writeFileSync(`${config.build.outDir}/manifest.webmanifest`, JSON.stringify(options.manifest))
                    await injectServiceWorker(config, options, indexjs);
                    console.log('closeBundle');
                }
                else
                    console.log('no manifest');
            },
        },
        async buildEnd(error) {
            if (error)
                throw error
        },
    }
}