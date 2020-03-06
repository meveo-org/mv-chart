import { LitElement, html, css } from "lit-element";
import "chartjs";

export class MvChart extends LitElement {
  static get properties() {
    return {
      type: { type: String, attribute: true },
      data: { type: Object, attribute: false, reflect: true },
      options: { type: Object, attribute: false, reflect: true },

      //  valid theme values are: "light", "dark"
      //    default: "light"
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --chart-margin: var(--mv-chart-margin, 20px auto);
        --chart-height: var(--mv-chart-height, 500px);
        --chart-width: var(--mv-chart-width, 800px);
        --light-background: var(--mv-chart-background, #ffffff);
        --dark-background: var(--mv-chart-dark-background, #373e48);
        --light-color: var(--mv-chart-light-color, #000000);
        --dark-color: var(--mv-chart-dark-color, #ffffff);
      }

      .mv-chart {
        height: var(--chart-height);
        width: var(--chart-width);
        margin: var(--chart-margin);
        position: relative;
      }

      .light {
        background-color: var(--light-background);
        color: var(--light-color);
      }

      .dark {
        background-color: var(--dark-background);
        color: var(--dark-color);
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
    this.chart = null;
  }

  render() {
    return html`
      <div class="mv-chart ${this.theme}">
        <canvas class="mv-chart-canvas"></canvas>
      </div>
    `;
  }

  firstUpdated() {
    if (!this.chart) {
      const { type, data, options } = this;
      const container = this.shadowRoot
        .querySelector(".mv-chart-canvas")
        .getContext("2d");
      this.chart = new Chart(container, { type, data, options });
    }
  }
}

customElements.define("mv-chart", MvChart);
