import { Component, DivElement, SpanElement, StyleOptional } from "../..";

export type AlertType = "success" | "info" | "warning" | "danger";

export class AlertPane extends Component {
  private static _div: DivElement = new DivElement({ id: "alert-system" });

  constructor(
    options?: StyleOptional & {
      title?: string;
      message?: string;
      type: AlertType;
      timeout?: number;
    },
  ) {
    super({
      className: "alert",
      display: "flex",
      flexDirection: "column",
      ...options,
    });
    const divBtn = this.appendChild(new DivElement({ className: "close-btn" }));
    this.append(new SpanElement({ text: options?.title || "", className: "fas fa-exclamation-circle " + options?.type }));
    this.append(new SpanElement({ text: options?.message || "", className: "msg " + options?.type }));
    const btn: SpanElement = divBtn.appendChild(new SpanElement({ className: "fas fa-times", text: "X" }));
    btn.onclick = () => this.remove();
    const divAlert = document.querySelector("#alert-system");
    if (!divAlert) document.body.appendChild(AlertPane._div);
    const timeout = options?.timeout || 5000;
    if (timeout > 0) {
      setTimeout(() => {
        this.remove();
      }, timeout);
    }
  }

  public static success(title: string, message: string, options?: StyleOptional & { timeout?: number }): AlertPane {
    return AlertPane._div.appendChild(new AlertPane({ ...options, type: "success", message, title }));
  }

  public static info(title: string, message: string, options?: StyleOptional & { timeout?: number }): AlertPane {
    return AlertPane._div.appendChild(new AlertPane({ ...options, type: "info", message, title }));
  }

  public static warning(title: string, message: string, options?: StyleOptional & { timeout?: number }): AlertPane {
    return AlertPane._div.appendChild(new AlertPane({ ...options, type: "warning", message, title }));
  }

  public static danger(title: string, message: string, options?: StyleOptional & { timeout?: number }): AlertPane {
    return AlertPane._div.appendChild(new AlertPane({ ...options, type: "danger", message, title }));
  }
}

customElements.define("alert-pane", AlertPane);
