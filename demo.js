import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-chart.js";
import "./bubblechart/src/js/mv-chart.js";
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



        /*radar chart*/
      .circle1 {
        width: 280px;
        height: 280px;
        margin: auto;
        background-color: #fff;
        box-shadow: #333 0px 0px 10px;
        border-radius: 50%;
        position: relative !important;
        margin: auto;
        top: 100px;
      }
      .circle2 {
    width: 240px;
    height: 240px;
    margin: auto;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(204 204 204) 0px 0px 10px;
    border-radius: 50%;
    position: relative;
    top: 20px;
}
      .circle3 {
        width: 155px;
        height: 155px;
        margin: auto;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(204 204 204) 0px 0px 15px;
        border-radius: 50%;
        position: relative;
        top: 35px;
      }

      .labelindic {
        position: absolute;
        left: 50%;
        z-index: 9999;
      }
      .labelindic a {
        color: #000;
        text-decoration: none;
        display:block;
        text-align:center;
      }

      .labelindic a:hover{text-decoration:underline;text-shadow:2px 2px 2px #ccc;}

      .label1 {
        top: 158px;
        margin-left: -21px;
      }
      .label2 {
        z-index: 9999;
        margin-left: 120px;
        margin-top: 135px;
      }
      .label3 {
        margin-top: 322px;
        margin-left: 117px;
      }
      .label4 {
        margin-top: 390px;
        margin-left: -22px;
      }
      .label5 {
        margin-top: 320px;
        margin-left: -167px;
        text-align: right;
      }
      .label6 {
        margin-top: 132px;
        margin-left: -165px;
        text-align: right;
      }





        /*donut chart*/



      .circle-bubble-1 {
        width: 380px;
        height: 380px;
        margin: auto;
        background-color: #c0e0e5;
        border-radius: 50%;
        position: relative !important;
        margin: auto;
        top: 100px;
      }
      .circle-bubble-2 {
        width: 350px;
        height: 350px;
        margin: auto;
        background-color: #dce9f2;
        border-radius: 50%;
        position: relative;
        top: 15px;
      }
      .circle-bubble-3 {
        width: 300px;
        height: 300px;
        margin: auto;
        background-color: #fff;
        box-shadow: 0px 15px 15px #ccc;
        border-radius: 50%;
        position: relative;
        top: 25px;
      }






      .social-profile {
        width: 450px;
        height: 450px;
        background-color: #dce9f2;
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
        color: #fff;
        text-align: center;

        font-weight: bold;
        box-shadow: 0px 10px 10px #ccc;
      }

      .social-profile-back {
        width: 600px;
        height: 600px;
        background-color: #dce9f2;
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
       /* box-shadow: rgb(204 204 204) 0px 10px 10px; */
        border: 5px solid rgb(204, 204, 204);
      }

      .social-profile-inner span:first-child {
        font-size: 30px;

        position: relative;
        top: 70px;
      }

      .social-profile-inner .result {
        font-size: 150px;
      }


      .social-profile-inner .title {
        font-size: 40px;
        position: relative;
        top: 50px;
      }

      .social-profile-inner img {
        width: 100px;
        position: relative;
        top: 40px;
      }




      .resultats {
        border-radius: 50%;
        position: absolute;
        right: 0px;
        font-size: 60px;
        width: 150px;
        height: 150px;
        text-align: center;
        top: 155px;
        background-color: #fff;
        color: #000;
        text-decoration: none;
        
      }



      .resultats > span > span {
        font-size: 20px;
      }
      .resultats > span > strong {
        position: relative;
        bottom: 30px;
      }

      .result {
        font-size: 100px;
        width: 150px;
        height: 150px;
        text-align: center;
      }

/*disposition des bulles*/
      .result-1-1{top: 165px !important; right: 0px  !important;animation: fadein 1s; }

      .result-1-2{top: 165px !important; right: 0px  !important;animation: fadein 1s; }
      .result-2-2{top: 165px !important; left: 0px  !important; animation: fadein 4s;}

      .result-1-3{top: 165px !important; right: 0px  !important;animation: fadein 1s; }
      .result-2-3{left:145px !important;top: 500px !important;animation: fadein 3s;}
      .result-3-3{left:145px !important;top:-145px;animation: fadein 5s;}



      .result-1-4{right:145px !important;top:-145px;animation: fadein 0s;}
      .result-2-4{right:145px !important;top: 500px !important;animation: fadein 2s;}
      .result-3-4{left:145px !important;top: 500px !important;animation: fadein 3s;}
      .result-4-4{left:145px !important;top:-145px;animation: fadein 5s;}

      .result-1-5{right:145px !important;top:-145px;animation: fadein 0s;}
      .result-2-5{top: 165px !important; right: 0px  !important;animation: fadein 1s; }
      .result-3-5{right:145px !important;top: 500px !important;animation: fadein 2s;}
      .result-4-5{left:145px !important;top: 500px !important;animation: fadein 3s;}
      .result-5-5{top: 165px !important; left: 0px  !important; animation: fadein 4s;}


      .result-1-6{right:145px !important;top:-145px;animation: fadein 0s;}
      .result-2-6{top: 165px !important; right: 0px  !important;animation: fadein 1s; }
      .result-3-6{right:145px !important;top: 500px !important;animation: fadein 2s;}
      .result-4-6{left:145px !important;top: 500px !important;animation: fadein 3s;}
      .result-5-6{top: 165px !important; left: 0px  !important; animation: fadein 4s;}
      .result-6-6{left:145px !important;top:-145px;animation: fadein 5s;}




      @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
      }
      .resultats a {
        color: #000;
      }
      .resultats:hover{background-color:#DCE9F2;border-color:#fff !important;}



      .dark{background-color: #EAF4F8 !important;}








    `;
  }
  /*
    constructor() {
      super();
      this.theme = "light";
    }
  */

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
   <!--   <mv-container class="dashboard-sample" .theme="${this.theme}">
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
      </mv-container>-->

      <mv-container class="main-container" .theme="${this.theme}">
        <h2>Donut Single</h2>
        <div class="mv-chart-demo">
          <div style="transform: scale(0.4);">
            <div class="social-profile-back-stroke">
              <div class="social-profile-back"></div>
            </div>
            <div class="social-profile">
              <div class="social-profile-inner">
                <img src="web_modules/mv-chart/img/donut-img.svg" /><br /><span
                  class="title"
                  >Brands</span
                ><br /><span class="result"
                  >${DOUGHNUT_SINGLE_CONFIG.result}</span
                >
              </div>
            </div>

${this.displayDonutBubbles()}

      <mv-chart
              .type="${DOUGHNUT_SINGLE_CONFIG.type}"
              .data="${DOUGHNUT_SINGLE_CONFIG.data}"
              .options="${DOUGHNUT_SINGLE_CONFIG.options}"
              .theme="${this.theme}"
            ></mv-chart>
          </div>
        </div>
      </mv-container>

      <mv-container class="main-container" .theme="${this.theme}" >
        <h2>Radar Single</h2>
        <div class="mv-chart-demo">

${this.displayRadarHits()}

          <div class="circle1" style="position:relative;">
            <div class="circle2"><div class="circle3"></div></div>
          </div>

          <mv-chart
            .type="${RADAR_SINGLE_CONFIG.type}"
            .data="${RADAR_SINGLE_CONFIG.data}"
            .options="${RADAR_SINGLE_CONFIG.options}"
            .theme="${this.theme}"
            style="position:relative;bottom:190px;margin-bottom :-190px;"
          ></mv-chart>
        </div>
      </mv-container>




      <mv-container class="main-container" .theme="${this.theme}">
      <h2>Bubble Single</h2>
        <mv-chart-bubble></mv-chart-bubble>
      </mv-container>



      
    `;
  }

  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent;
    this.theme = value;
  };


  displayDonutBubbles(){
    let i;
    let loop = new Array();

    let max = DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data.length;
    for (i=0;i<max;i++){
      

      if (DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i]){

        if (DOUGHNUT_SINGLE_CONFIG.data.datasets[0].links[i] != ''){
    loop[i] = html `<a href="${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].links[i]}" target="_blank"  class="result-${i+1}-${max} resultats pos"  style="border:solid 10px ${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].backgroundColor[i]};"><span><span>${DOUGHNUT_SINGLE_CONFIG.data.names[i]}</span><br /><strong>${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i]}</strong></span></a>`; 
        }
        else {

          loop[i] = html `<a class="result-${i+1}-${max} resultats pos"  style="cursor:pointer;border:solid 10px ${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].backgroundColor[i]};"><span><span>${DOUGHNUT_SINGLE_CONFIG.data.names[i]}</span><br /><strong>${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i]}</strong></span></a>`; 


        }
     }


    }
    return  loop;
  }


  displayRadarHits(){
    let i;
    let loop = new Array();
    let max = RADAR_SINGLE_CONFIG.data.datasets[0].data.length;
    for (i=0;i<max;i++){

      loop[i] = html `
    <div class="label${i+1} labelindic">
      <a href="${RADAR_SINGLE_CONFIG.data.links[i]}" target="_blank"
        >${RADAR_SINGLE_CONFIG.data.datasets[0].data[i]} hits</a
      >
    </div>`;   
    }
    return loop;



  }
}





customElements.define("mv-chart-demo", MvChartDemo);
