export interface ComponentDefinitionOptions extends ElementDefinitionOptions {
  tag?: string;
  templateUrl?: string;
  styleUrl?: string;
  tagTest?: string;
  scoped?: boolean;
}
// @ts-ignore
export function Register(options?: ComponentDefinitionOptions): any {
  return function (constructor: CustomElementConstructor) {};
}
