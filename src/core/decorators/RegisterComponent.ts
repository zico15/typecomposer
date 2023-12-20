export interface ComponentDefinitionOptions extends ElementDefinitionOptions {
  tag?: string;
  templateUrl?: string;
  styleUrl?: string;
  tagTest?: string;
}
// @ts-ignore
export function Register(options?: ComponentDefinitionOptions): any {
  return function (constructor: CustomElementConstructor) {};
}
