export interface PWAManifest {
    name: string;
    short_name: string;
    description: string;
    start_url: string;
    display: "fullscreen" | "standalone" | "minimal-ui" | "browser" | "minimal-ui";
    background_color: string;
    theme_color: string;
    icons: PWAIcon[];
    categories?: string[];
    orientation?: "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
    prefer_related_applications?: boolean;
    related_applications?: PWARelatedApplication[];
    scope?: string;
    screenshots?: PWAScreenshot[];
    serviceworker?: {
        src: string;
        scope: string;
    };
    shortcuts?: PWAShortcut[];
    display_override?: ("fullscreen" | "standalone" | "minimal-ui" | "browser" | "minimal-ui")[];
    file_handlers?: PWAFileHandler[];
    protocol_handlers?: PWAProtocolHandler[];
    share_target?: PWAShareTarget;
}

export interface PWAIcon {
    src: string;
    sizes: string;
    type: string;
}

export interface PWARelatedApplication {
    platform: string;
    id: string;
}

export interface PWAScreenshot {
    src: string;
    sizes: string;
    type: string;
}

export interface PWAShortcut {
    name: string;
    url: string;
    icons: PWAIcon[];
}

export interface PWAFileHandler {
    action: string;
    accept: { [key: string]: string[] };
}

export interface PWAProtocolHandler {
    protocol: string;
    url: string;
}

export interface PWAShareTarget {
    action: string;
    method: string;
    params: { [key: string]: string };
}

// Exemplo de uso:
export const exemploManifest: PWAManifest = {
    name: "Minha Progressive Web App",
    short_name: "Minha PWA",
    description: "Uma descrição da minha Progressive Web App",
    start_url: "/index.html",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
        {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
        },
    ],
    categories: ["utilities"],
    orientation: "portrait",
    prefer_related_applications: true,
    related_applications: [
        {
            platform: "play",
            id: "com.example.myapp",
        },
    ],
    scope: "/",
    screenshots: [
        {
            src: "/screenshot1.png",
            sizes: "800x600",
            type: "image/png",
        },
        {
            src: "/screenshot2.png",
            sizes: "1024x768",
            type: "image/png",
        },
    ],
    serviceworker: {
        src: "/service-worker.js",
        scope: "/",
    },
    shortcuts: [
        {
            name: "Shortcut 1",
            url: "/shortcut1",
            icons: [
                {
                    src: "/shortcut-icon1.png",
                    sizes: "192x192",
                    type: "image/png",
                },
            ],
        },
        {
            name: "Shortcut 2",
            url: "/shortcut2",
            icons: [
                {
                    src: "/shortcut-icon2.png",
                    sizes: "192x192",
                    type: "image/png",
                },
            ],
        },
    ],
    display_override: ["fullscreen"],
};
