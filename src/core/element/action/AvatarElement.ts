import { Component, ImageElement, InputElement, StyleOptional } from "../../../";

export class AvatarElement extends Component {
  #image: ImageElement = new ImageElement({ className: "avatar" });
  #input = new InputElement({
    type: "file",
    hidden: true,
    accept: "image/*",
  });

  constructor(props?: StyleOptional & { src?: string }) {
    super(props);
    this.addClassName("avatar-element");
    this.append(this.#image, this.#input);
    this.#input.onchange = () => {
      const file = this.#input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.#image.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    };
    this.addEventListener("click", () => this.#input.click());
    if (props?.src) {
      this.src = props.src;
    }
  }

  get src(): string {
    return this.#image.src;
  }

  set src(value: string) {
    this.#image.src = value;
  }

  get image(): ImageElement {
    return this.#image;
  }

  get input(): InputElement {
    return this.#input;
  }
}
// @ts-ignore
customElements.define("avatar-element", AvatarElement);
