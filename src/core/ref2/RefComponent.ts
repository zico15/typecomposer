import { Component } from "../element";

/**
 * to remove the alert just add the underline (!) to the variable name
 * ex: name!: T;
 */
export function RefComponent(optional?: { id?: string } | string): any {
  return function (target: any, propertyKey: string) {};
}

export class VFor {
  private orden: number = 0;
  private parent: ParentNode | null = null;
  private static id: number = 1;

  constructor(
    public component: Component,
    public elementBase: string,
    public key: string,
    public vfor: RegExpMatchArray,
  ) {
    console.log("====================================");
    console.log("VFor: ", elementBase);
  }

  public init() {
    const element = this.component.querySelector(`[key-for="${this.key}"]`);
    if (element) {
      this.parent = element.parentNode;
      if (this.parent?.children) this.orden = Array.from(this.parent.children).indexOf(element);
    }
  }

  public update() {
    const elements = this.component.querySelectorAll(`[key-for="${this.key}"]`);
    elements?.forEach((element) => element.remove());
    if (this.parent) {
      // const value: ref<any> = (this.component as any)[this.vfor[2]];
      this.setData((this.component as any)[this.vfor[2]].value);
      (this.component as any)[this.vfor[2]].subscribe({
        ref: this,
        name: "value",
        fun: this.setData.bind(this),
      });
      console.log("value: ", (this.component as any)[this.vfor[2]]);
    }
  }

  private setData(value: any[]) {
    for (let i = 0; i < value.length; i++) {
      // <div id="as"> test</div> || <p id="as"> test</p>
      const base = document.createElement("div");
      console.log("elementBase: ", value[i], " v1: ", this.vfor[1], " v2: ", this.vfor[2]);
      const vname = "nome";
      console.log("vname: ", vname);
      base.innerHTML = this.elementBase.replace("{{item.nome}}", value[i][vname]);
      if (base.firstChild) this.parent?.insertBefore(base.firstChild, this.parent.children[this.orden + i]);
    }
  }

  public static creadList(component: Component, html: string) {
    const regex = /<\w+\s[^>]*?\bv-for\b[^>]*?>[\s\S]*?<\/\w+>/g;
    // Encontrar correspondências na string HTML
    let matches = html.match(regex);

    const vfores: VFor[] = [];
    if (matches)
      for (let i = 0; i < matches.length; i++) {
        const key = Math.random().toString(36).substr(2, 9) + "-" + VFor.id++;
        const vfor = matches[i].match(/v-for="\s*let\s+(\w+)\s+of\s+(\w+)\s*/);
        if (vfor == null) continue;
        console.log("vfor: ", vfor);
        const m = matches[i].replace(vfor[0], `key-for="${key}"`);
        html = html.replace(matches[i], m);
        vfores.push(new VFor(component, m, key, vfor));
      }
    component.innerHTML = html;
    for (let i = 0; i < vfores.length; i++) {
      vfores[i].init();
      vfores[i].update();
    }
  }
}
