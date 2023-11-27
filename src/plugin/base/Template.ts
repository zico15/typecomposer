
export class TemplateController {

    private static bases: string[] = ["div", "p", "a", "img", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "span", "strong", "em", "br", "hr", "table", "tr", "th", "td", "form", "input", "button", "textarea", "label", "select", "iframe", "audio", "video", "canvas", "svg", "footer", "header", "nav", "main", "section", "article", "details", "summary"];

    public static read(html: string): string {
        for (let i = 0; i < TemplateController.bases.length; i++) {
            const base = TemplateController.bases[i];
            html = html.replaceAll(`<${base}`, `<${base} is="base-${base}-element" `);
        }
        return html.replace(/<!--[\s\S]*?-->/g, '');
    }

}