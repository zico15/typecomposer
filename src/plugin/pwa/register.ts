import { PWDOptions } from ".";


export function register(options: PWDOptions, indexjs: string) {
    return {
        fileName: 'register-sw.js',
        code: `

        window.addEventListener('load', () => {
            loadpage();
            registerSW();
          });
          
          async function loadpage() {
            const res = await fetch('${indexjs}');
            console.log("loadpage: ", res);
          }
          
          async function registerSW() {
            if ('serviceWorker' in navigator) {
              try {
                await navigator.serviceWorker.register('./sw.js');
              } catch (e) {
                console.log('SW registration failed');
              }
            }
          }

    `}

}