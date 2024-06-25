export function StyleLink(url: string) {
  return (__: Function) => {
    if (url != undefined) {
      if (url.indexOf("src/") == -1) url = "src/" + url;
      // if (constructor.prototype._onLoad == undefined)
      //     constructor.prototype._onLoad = [function (this: Component) { this.addStyleLink(url) }];
      // else
      //     constructor.prototype._onLoad.push(function (this: Component) { this.addStyleLink(url) });
    }
  };
}
