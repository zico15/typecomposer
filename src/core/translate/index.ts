import { RefTranslate } from "../ref/RefTranslate";

export function translate(keys: string[] | string, ...args: any[]): any {
  if (typeof keys === "string") keys = [keys];
  return new RefTranslate(keys, args);
}
