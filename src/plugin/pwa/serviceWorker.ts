import { join, relative } from "node:path";
import { PWDOptions } from ".";
import type { ResolvedConfig } from 'vite'
import { readdirSync, statSync } from 'node:fs';

function listDir(path: string, ignoreFiles: string[]): string[] {
  const files: string[] = [];

  function listRecursively(diretorio: string) {
    const itens = readdirSync(diretorio);

    itens.forEach((item) => {
      const pathFile = join(diretorio, item);
      if (statSync(pathFile).isDirectory())
        listRecursively(pathFile);
      else {
        const file = relative(path, pathFile);
        if (ignoreFiles.indexOf(file) == -1)
          files.push("./" + file);
      }
    });
  }
  listRecursively(path);
  return files;
}

export function sw(config: ResolvedConfig, options: PWDOptions) {
  const ignoreFiles = options?.ignoreFiles || [];
  // ignoreFiles.push('manifest.webmanifest');
  ignoreFiles.push('sw.js');
  const staticAssets: string[] = listDir(config?.build?.outDir || '', ignoreFiles);
  staticAssets.push("./")
  const files = staticAssets.map((asset) => {
    return `'${asset}'`
  });
  console.log('staticAssets: ', staticAssets);
  return {
    fileName: 'sw.js',
    staticAssets,
    code: `

    const cacheName = "news-v1";
    const staticAssets = [
     ${files.join(',\n')}
    ];

    self.addEventListener("install", async (e) => {
      const cache = await caches.open(cacheName);
      await cache.addAll(staticAssets);
      return self.skipWaiting();
    });

    self.addEventListener("notificationclick", (event) => {
      event.notification.close();
      var fullPath = self.location.origin + event.notification.data.path;
      console.log(fullPath);
      clients.openWindow(fullPath);
    });

    self.addEventListener("activate", (e) => {
      self.clients.claim();
    });

    self.addEventListener("fetch", async (e) => {
      const req = e.request;
      const url = new URL(req.url);

      if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
      } else {
        e.respondWith(networkAndCache(req));
      }
    });

    async function cacheFirst(req) {
      const cache = await caches.open(cacheName);
      const cached = await cache.match(req);
      return cached || fetch(req);
    }

    async function networkAndCache(req) {
      const cache = await caches.open(cacheName);
      try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        const cached = await cache.match(req);
        return cached;
      }
    }
    `
  }
}