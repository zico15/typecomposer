import { Register, Component, type StyleOptional, CanvasElement } from "../..";
import { Chart, ChartConfiguration } from "chart.js/auto";

export class ChartElement extends Component {
  private _canvas: CanvasElement = new CanvasElement();
  private _chart: Chart;

  constructor(optional?: StyleOptional) {
    super(optional);
    const ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this._chart = new Chart(ctx, ChartElement.ChartOptionsEmpty());
    this.addEventListener("resize", this.resize.bind(this));
    this.appendChild(this._canvas);
  }

  public resize() {
    this.style.display = "none";
    this.chart?.resize();
    this.chart?.update();
    this.style.display = "block";
  }

  oninit(): void {
    const data = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Vendas",
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
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
      (this._chart.options as any) =
        config.options || ChartElement.ChartOptionsEmpty().options;
    }
    this._chart.update();
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

  public static ChartOptionsEmpty(): ChartConfiguration {
    return {
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
  }
}
// @ts-ignore
customElements.define("chart-element", ChartElement);
