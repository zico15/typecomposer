import { RefTranslate } from "../ref/RefTranslate";

export function translate(...keys: string[]): any {
  return new RefTranslate(keys);
}
