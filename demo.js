import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./chartjs/barchart/mv-chart.js";
import "./chartjs/bubblechart/mv-chart.js";
import "./chartjs/donutchart/mv-chart.js";
import "./chartjs/radarchart/mv-chart.js";

import "./chartjs/donutchart/mv-chart-single.js";
import "./chartjs/radarchart/mv-chart-single.js";
import "./d3js/bubblechart/src/js/mv-chart.js";


import { BARCHART_CONFIG } from "./chartjs/barchart/datas/barchart-config.js";
import { DOUGHNUT_CONFIG } from "./chartjs/donutchart/datas/doughnut-config.js";
import { RADAR_CONFIG } from "./chartjs/radarchart/datas/radar-config.js";
import { BUBBLE_CONFIG } from "./chartjs/bubblechart/datas/bubble-config.js";
import { RADAR_SINGLE_CONFIG } from "./chartjs/radarchart/datas/radar-single-config.js";
import { DOUGHNUT_SINGLE_CONFIG } from "./chartjs/donutchart/datas/doughnut-single-config.js";


export class MvChartDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        color: #818181;
      }

      legend {
        font-weight: 500;
        color: red;
      }

   

      .mv-chart-demo {
        --mv-chart-margin: auto;
        --mv-chart-height: 500px;
        --mv-chart-width: 600px;
      }

      .main-container {
        --mv-container-min-width: 1000px;
      }

      .dashboard-sample {
        --mv-container-min-width: 950px;
        --mv-container-padding: 40px;
      }

      .dashboard-container {
        display: grid;
        grid-template-columns: 450px 450px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }

   

      .dashboard-grid {
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }

      .dark{background-color: #EAF4F8 !important;}

    `;
  }

    constructor() {
      super();
      this.theme = "light";
    }


  firstUpdated(){


    
  }
  render() {
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked
            @change="${this.changeTheme}"
          />Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            @change="${this.changeTheme}"
          />Dark
        </label>
      </fieldset>
 <mv-container class="dashboard-sample" .theme="${this.theme}">
    



 <h2>Radarchart Chartjs</h2>
        <div class="mv-chart-demo">
       
      <mv-chart-radar
              .type="${RADAR_CONFIG.type}"
              .data="${RADAR_CONFIG.data}"
              .options="${RADAR_CONFIG.options}"
              .theme="${this.theme}"
            ></mv-chart-radar>
          </div>



 <h2>Donutchart Chartjs</h2>
        <div class="mv-chart-demo">
       
      <mv-chart-donut
              .type="${DOUGHNUT_CONFIG.type}"
              .data="${DOUGHNUT_CONFIG.data}"
              .options="${DOUGHNUT_CONFIG.options}"
              .theme="${this.theme}"
            ></mv-chart-donut>
          </div>


 <h2>Barchart Chartjs</h2>
        <div class="mv-chart-demo">
       
      <mv-chart-bar
              .type="${BARCHART_CONFIG.type}"
              .data="${BARCHART_CONFIG.data}"
              .options="${BARCHART_CONFIG.options}"
              .theme="${this.theme}"
            ></mv-chart-bar>
          </div>


          <h2>Bubble Chartjs</h2>
        <div class="mv-chart-demo">
       
      <mv-chart-bubble
              .type="${BUBBLE_CONFIG.type}"
              .data="${BUBBLE_CONFIG.data}"
              .options="${BUBBLE_CONFIG.options}"
              .theme="${this.theme}"
            ></mv-chart-bubble>
          </div>


    
        <h2>Donut Chartjs</h2>
        <div class="mv-chart-demo">
       
      <mv-chart-donut-single
              .type="${DOUGHNUT_SINGLE_CONFIG.type}"
              .data="${DOUGHNUT_SINGLE_CONFIG.data}"
              .options="${DOUGHNUT_SINGLE_CONFIG.options}"
              .theme="${this.theme}"
            ></mv-chart-donut-single>
          </div>
    

 
        <h2>Radar Chartjs</h2>
        <div class="mv-chart-demo">

          <mv-chart-radar-single
            .type="${RADAR_SINGLE_CONFIG.type}"
            .data="${RADAR_SINGLE_CONFIG.data}"
            .options="${RADAR_SINGLE_CONFIG.options}"
            .theme="${this.theme}"
            ></mv-chart-radar-single>
        </div>
    




   
      <h2>Bubble D3</h2>
        <mv-chart-bubble-d3></mv-chart-bubble-d3>
 </mv-container>

<!--
      <mv-container class="main-container" .theme="${this.theme}">
      <h2>Donut Single</h2>
        <mv-chart-donut></mv-chart-donut>
      </mv-container>

      <mv-container class="main-container" .theme="${this.theme}">
      <h2>Radar Single</h2>
        <mv-chart-radar></mv-chart-radar>
      </mv-container>
  --> 


      
    `;
  }

  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent;
    this.theme = value;
  };





  





}





customElements.define("mv-chart-demo", MvChartDemo);
