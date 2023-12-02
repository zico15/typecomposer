import type { Plugin } from 'vite'
import { PWDOptions, PwaBuildPlugin } from "./plugin/pwa";
import typeComposePlugin from "./plugin/base";


export interface TypeComposeOptions {
    pwa?: PWDOptions;
}

export default function TypeCompose(options: TypeComposeOptions = {}): Plugin<any>[] {
    const { pwa } = options;
    const plugins: Plugin<any>[] = [typeComposePlugin()];
    if (pwa) {
        console.log('activate pwa build');
        console.log('options: ', pwa);
        plugins.push(PwaBuildPlugin(pwa));
    }
    return plugins;
}
