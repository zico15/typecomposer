# TypeComposer

TypeComposer is a frontend framework that allows you to create user interfaces declaratively using only classes in TypeScript or JavaScript, eliminating the need to write HTML directly.It offers a simplified and efficient approach to web development.

## Features

    - Create user interfaces without writing HTML directly.

- Uses a class-based syntax to define the structure of the interface.
- Full TypeScript support and compatibility with JavaScript.
- Easily integratable with other frontend frameworks and libraries.
- Style and positioning of elements controlled via CSS.

## Installation

You can install TypeComposer via npm:

```bash
npm create typecomposer@latest
```

## Usage

To get started with TypeComposer, import the necessary elements from the package and start creating your user interface using classes.Here's a basic example of a login page:

```js
import typescriptLogo from "/typescript.svg";
import logo from "/typecomposer.svg";
import { App, BorderPaneElement, ButtonElement, H1Element, HBoxElement, ImageElement, VBoxElement } from "typecomposer";
import "./style.css";

export class AppPage extends BorderPaneElement {
  private count: number = 0;

  onInit(): void {
    const vbox = new VBoxElement({ justifyContent: "center" });
    const images = new HBoxElement({ width: "100%", alignItems: "center", justifyContent: "center" });
    images.append(new ImageElement({ src: logo, className: "logo" }));
    images.append(new ImageElement({ src: typescriptLogo, className: "logo" }));
    vbox.append(images);
    vbox.append(new H1Element({ text: "TypeComposer", textAlign: "center", color: "#fcfffa" }));
    const counter = new ButtonElement({ text: "0", width: "35%", height: "50px", alignSelf: "center" });
    counter.onclick = () => (counter.innerHTML = (this.count++).toString());
    vbox.append(counter);
    this.center = vbox;
  }
}

App.setPage(new AppPage());
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request in this GitHub repository.

## License

This project is licensed under the[MIT License](LICENSE).

```

```
