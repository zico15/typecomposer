import { Component, type StyleOptional, CanvasElement } from "../..";
import { Chart, ChartConfiguration } from "chart.js/auto";

/**
 * ChartElement
 * https://www.chartjs.org/docs/latest/charts
 */
export class ChartElement extends Component {
  private _canvas: CanvasElement = new CanvasElement();
  private _chart: Chart;
  private ctx: CanvasRenderingContext2D;

  constructor(
    optional?: StyleOptional & {
      type?: ChartConfiguration["type"];
      data?: ChartConfiguration["data"];
      options?: ChartConfiguration["options"];
    },
  ) {
    super(optional);
    this.ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this._chart = new Chart(
      this.ctx,
      ChartElement.ChartOptionsEmpty({
        type: optional?.type,
        data: optional?.data,
        options: optional?.options,
      }),
    );
    this.addEventListener("resize", this.resize.bind(this));
    this.addEventListener("change", this.resize.bind(this));
    this.appendChild(this._canvas);
  }

  public resize() {
    this.style.display = "none";
    this.chart?.resize();
    this.chart?.update();
    this._canvas.width = this.clientWidth;
    this._canvas.height = this.clientHeight;
    this.style.display = "block";
  }

  onInit(): void {
    const data = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Vendas",
          data: [12, 19, 3, 5, 2],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
          borderWidth: 1,
        },
      ],
    };

    this.update({
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  public update(config?: ChartConfiguration) {
    if (config != undefined) {
      this._chart.data = config.data || ChartElement.ChartOptionsEmpty().data;
      (this._chart.options as any) = config.options || ChartElement.ChartOptionsEmpty().options;
      // ChartElement.ChartOptionsEmpty().options.da
      // if (config.type) (this._chart.options as any).type = config.type;
    }
    if (config.type) {
      // @ts-ignore
      this._chart.config.type = config.type;
    }
    this._chart.update();
    // mudar o type do chart
  }

  public set type(type: ChartConfiguration["type"]) {
    // @ts-ignore
    this._chart.config.type = type;
    this._chart.update();
  }

  public get type(): ChartConfiguration["type"] {
    // @ts-ignore
    return this._chart.config.type;
  }

  public get configuration(): ChartConfiguration {
    return this._chart.config as ChartConfiguration;
  }

  public set configuration(config: ChartConfiguration) {
    this.update(config);
  }

  public get datasets(): ChartConfiguration["data"]["datasets"] {
    return this._chart.data.datasets;
  }

  public set datasets(datasets: ChartConfiguration["data"]["datasets"]) {
    this._chart.data.datasets = datasets;
    this._chart.update();
  }

  get chart(): Chart {
    return this._chart;
  }

  unmount(): void {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  public static ChartOptionsEmpty(data?: ChartConfiguration): ChartConfiguration {
    const result: any = {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: ["rgba(255, 99, 132, 0)"],
            borderColor: ["rgba(255, 99, 132, 0)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    if (data?.data != undefined) result.data = data.data;
    if (data?.options != undefined) result.options = data.options;
    if (data?.type != undefined) result.type = data.type;
    return result;
  }

  public static generateUniqueColors(qtd: number): string[] {
    const cores: string[] = [];
    const hexadecimais = "0123456789ABCDEF";

    for (let i = 0; i < qtd; i++) {
      let cor = "#";
      for (let j = 0; j < 6; j++) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
      }
      cores.push(cor);
    }
    return cores;
  }
}
// @ts-ignore
customElements.define("chart-element", ChartElement);
