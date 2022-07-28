import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-chart.js";
import { BARCHART_CONFIG } from "./barchart-config.js";
import { DOUGHNUT_CONFIG } from "./doughnut-config.js";
import { RADAR_CONFIG } from "./radar-config.js";
import { BUBBLE_CONFIG } from "./bubble-config.js";
import { RADAR_SINGLE_CONFIG } from "./radar-single-config.js";
import { BUBBLE_SINGLE_CONFIG } from "./bubble-single-config.js";
import { DOUGHNUT_SINGLE_CONFIG } from "./doughnut-single-config.js";


export class MvChartDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true }
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

      .doughnut.large {
        --mv-container-padding: 0 20px;
        --mv-container-min-width: 400px;
        --mv-container-max-width: 400px;
        --mv-container-min-height: 570px;
      }

      .doughnut.large .gradient-test {
        --mv-chart-height: 400px;
        --mv-chart-width: 400px;
        height: 400px;
        width: 400px;
      }

      .doughnut.small {
        --mv-container-padding: 0 20px;
        --mv-container-min-width: 200px;
        --mv-container-max-width: 200px;
        --mv-container-min-height: 280px;
        --mv-container-max-height: 280px;
      }

      .doughnut.small .gradient-test {
        --mv-chart-height: 200px;
        --mv-chart-width: 200px;
        height: 200px;
        width: 200px;
      }

      .dashboard-grid {
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }




      .circle1{width:280px;height:280px;margin:auto;background-color:#fff;box-shadow:0px 15px 15px #CCC;border-radius: 50%;position :relative !important;margin:auto;top:100px;}
      .circle2{width:225px;height:225px;margin:auto;background-color:#fff;box-shadow:0px 15px 15px #CCC;border-radius: 50%;position :relative;top:25px;}
      .circle3{width:125px;height:125px;margin:auto;background-color:#fff;box-shadow:0px 15px 15px #CCC;border-radius: 50%;position :relative;top:45px;}
    



      .circle-bubble-1{width:380px;height:380px;margin:auto;background-color:#c0e0e5;border-radius: 50%;position: relative !important;margin:auto;top:100px;}
      .circle-bubble-2{width:350px;height:350px;margin:auto;background-color:#dce9f2;border-radius: 50%;position :relative;top:15px;}
      .circle-bubble-3{width:300px;height:300px;margin:auto;background-color:#fff;box-shadow:0px 15px 15px #CCC;border-radius: 50%;position :relative;top:25px;}
    
      .mv-chart-demo{background-color:#dce9f2;}


      
.social-profile {
  width: 450px;
  height: 450px;
  background-color: #DCE9F2;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -225px;
  top: 25px;
  z-index: 999;
}
.social-profile-inner {
  width: 400px;
  height: 400px;
  background-color: rgb(69, 141, 183);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -199px;
  top: 25px;
  z-index: 9991;
  color:#fff;
  text-align : center;
  line-height:130px;
  font-weight:bold;
  box-shadow: 0px 10px 10px #ccc;
}



.social-profile-back {
  width: 600px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -300px;
  top: 45px;
  z-index: 0;
  box-shadow: 0px 10px 10px #ccc;
}

.social-profile-back-stroke {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -350px;
  top: -100px;
  z-index: 0;
  box-shadow: rgb(204 204 204) 0px 10px 10px;
  border: 5px solid rgb(204, 204, 204);
}



.social-profile-inner span{font-size:30px;line-height:125px;}


.social-profile-inner .result {font-size:150px;}


      
    `;
  }
/*
  constructor() {
    super();
    this.theme = "light";
  }
*/
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
        <div class="dashboard-container">
          <div class="dashboard-main">
            <mv-container class="doughnut large" .theme="${this.theme}">
              <div class="gradient-test">
                <h2>Brands</h2>
                <mv-chart
                  .type="${DOUGHNUT_CONFIG.type}"
                  .data="${DOUGHNUT_CONFIG.data}"
                  .options="${DOUGHNUT_CONFIG.options}"
                  .theme="${this.theme}"
                ></mv-chart>
              </div>
            </mv-container>
          </div>
          <div class="dashboard-grid">
            <mv-container class="doughnut small" .theme="${this.theme}">
              <div class="gradient-test">
                <h3>Brands</h3>
                <mv-chart
                  .type="${DOUGHNUT_CONFIG.type}"
                  .data="${DOUGHNUT_CONFIG.data}"
                  .options="${DOUGHNUT_CONFIG.options}"
                  .theme="${this.theme}"
                ></mv-chart>
              </div>
            </mv-container>
            <mv-container class="doughnut small" .theme="${this.theme}">
              <div class="gradient-test">
                <h3>Categories</h3>
                <mv-chart
                  .type="${DOUGHNUT_CONFIG.type}"
                  .data="${DOUGHNUT_CONFIG.data}"
                  .options="${DOUGHNUT_CONFIG.options}"
                  .theme="${this.theme}"
                ></mv-chart>
              </div>
            </mv-container>
            <mv-container class="doughnut small" .theme="${this.theme}">
              <div class="gradient-test">
                <h3>Products</h3>
                <mv-chart
                  .type="${DOUGHNUT_CONFIG.type}"
                  .data="${DOUGHNUT_CONFIG.data}"
                  .options="${DOUGHNUT_CONFIG.options}"
                  .theme="${this.theme}"
                ></mv-chart>
              </div>
            </mv-container>
            <mv-container class="doughnut small" .theme="${this.theme}">
              <div class="gradient-test">
                <h3>Thematics</h3>
                <mv-chart
                  .type="${DOUGHNUT_CONFIG.type}"
                  .data="${DOUGHNUT_CONFIG.data}"
                  .options="${DOUGHNUT_CONFIG.options}"
                  .theme="${this.theme}"
                ></mv-chart>
              </div>
            </mv-container>
          </div>
        </div>
      </mv-container>

      <mv-container class="main-container" .theme="${this.theme}">

      <h2>Bar</h2> 

        <div class="mv-chart-demo">
          <mv-chart
            .type="${BARCHART_CONFIG.type}"
            .data="${BARCHART_CONFIG.data}"
            .options="${BARCHART_CONFIG.options}"
            .theme="${this.theme}"
          ></mv-chart>
        </div>
      </mv-container>
      <mv-container class="main-container" .theme="${this.theme}">

      <h2>Radar</h2>


      <div class="mv-chart-demo">
        <mv-chart
          .type="${RADAR_CONFIG.type}"
          .data="${RADAR_CONFIG.data}"
          .options="${RADAR_CONFIG.options}"
          .theme="${this.theme}"
        ></mv-chart>
      </div>
    </mv-container>
    <mv-container class="main-container" .theme="${this.theme}">

    <h2>Bubble</h2>


    <div class="mv-chart-demo">
      <mv-chart
        .type="${BUBBLE_CONFIG.type}"
        .data="${BUBBLE_CONFIG.data}"
        .options="${BUBBLE_CONFIG.options}"
        .theme="${this.theme}"
      ></mv-chart>
    </div>
  </mv-container>





  <mv-container class="main-container" .theme="${this.theme}">

<h2>Donut Single V2</h2>
<div class="mv-chart-demo"> 
<div style="transform: scale(0.5);">
<div class='social-profile-back-stroke'><div class='social-profile-back'></div></div><div class='social-profile'><div class='social-profile-inner'><span>Social Profiles</span><br/><span class='result'>${DOUGHNUT_SINGLE_CONFIG.result}%</span></div></div>


          <mv-chart
            .type="${DOUGHNUT_SINGLE_CONFIG.type}"
            .data="${DOUGHNUT_SINGLE_CONFIG.data}"
            .options="${DOUGHNUT_SINGLE_CONFIG.options}"
            .theme="${this.theme}"
          ></mv-chart>
        </div>

        </div>

      </mv-container>



  <mv-container class="main-container">


  <h2>Radar Single V2</h2>



  <div class="mv-chart-demo">
  <div class="circle1" style="position:relative;"><div class="circle2"><div class="circle3"></div></div></div>
 

    <mv-chart
      .type="${RADAR_SINGLE_CONFIG.type}"
      .data="${RADAR_SINGLE_CONFIG.data}"
      .options="${RADAR_SINGLE_CONFIG.options}"
      .theme="${this.theme}"
   style="display: block;
   width: 600px;
   height: 300px;
   position: relative;
   bottom: 190px;margin:auto;" ></mv-chart>
   
  </div>
</mv-container>














<mv-container class="main-container">


<h2>Bubble Single V2</h2>



<div class="mv-chart-demo">
    <div class="circle-bubble-1" style="position:relative;"><div class="circle-bubble-2"><div class="circle-bubble-3"></div></div></div>
   
   
    <div class="canvas-cache">


  <mv-chart
    .type="${BUBBLE_SINGLE_CONFIG.type}"
    .data="${BUBBLE_SINGLE_CONFIG.data}"
    .options="${BUBBLE_SINGLE_CONFIG.options}"
    .theme="${this.theme}"
 style="display: block;
 width: 600px;
 height: 300px;
 position: relative;
 bottom: 190px;margin:auto;" ></mv-chart>
 
</div>


</div>



</div>



</mv-container>









    `;
  }

  changeTheme = originalEvent => {
    const {
      target: { value }
    } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-chart-demo", MvChartDemo);
