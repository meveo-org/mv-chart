import { LitElement, html, css } from "lit-element";
import "../lib/chart.min.js";
import "../lib/chartjs-plugin-datalabels.min.js";
import { DOUGHNUT_SINGLE_CONFIG } from "./datas/doughnut-single-config.js";

export class MvChart extends LitElement {
  static get properties() {
    return {
      type: { type: String, attribute: true },
      data: { type: Object, attribute: false, reflect: true },
      options: { type: Object, attribute: false, reflect: true },
      plugins: { type: Object, attribute: false, reflect: true },

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
        --chart-margin: var(--mv-chart-margin, auto);
        --chart-height: var(--mv-chart-height, 300px);
        --chart-width: var(--mv-chart-width, 400px);
        --light-background: var(--mv-chart-background, #ffffff);
        --dark-background: var(--mv-chart-dark-background, #373e48);
        --light-color: var(--mv-chart-light-color, #000000);
        --dark-color: var(--mv-chart-dark-color, #ffffff);
      }

      .mv-chart {
        margin: var(--chart-margin);
        height: var(--chart-height);
        width: var(--chart-width);
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

      /* Chart.js custom styles 
       *
       * DOM element rendering detection
       * https://davidwalsh.name/detect-node-insertion
       */
      @keyframes chartjs-render-animation {
        from {
          opacity: 0.99;
        }
        to {
          opacity: 1;
        }
      }

      .chartjs-render-monitor {
        animation: chartjs-render-animation 0.001s;
      }

      /*
       * DOM element resizing detection
       * https://github.com/marcj/css-element-queries
       */
      .chartjs-size-monitor,
      .chartjs-size-monitor-expand,
      .chartjs-size-monitor-shrink {
        position: absolute;
        direction: ltr;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        pointer-events: none;
        visibility: hidden;
        z-index: -1;
      }

      .chartjs-size-monitor-expand > div {
        position: absolute;
        width: 1000000px;
        height: 1000000px;
        left: 0;
        top: 0;
      }

      .chartjs-size-monitor-shrink > div {
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: 0;
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
.result-1-1{right:-160px !important;top:-145px;animation: fadein 1s; }

.result-1-2{top: 135px !important;right: -275px !important ;animation: fadein 1s; }
.result-2-2{top: 135px !important;left: -275px  !important; animation: fadein 4s;}

.result-1-3{top: 165px !important; right: 0px  !important;animation: fadein 1s; }
.result-2-3{left:145px !important;top: 500px !important;animation: fadein 3s;}
.result-3-3{left:145px !important;top:-145px;animation: fadein 5s;}



.result-1-4{right:-160px !important;top:-145px;animation: fadein 0s;}
.result-2-4{right:-160px !important;top: 440px !important;animation: fadein 2s;}
.result-3-4{left:-160px !important;top: 440px !important;animation: fadein 3s;}
.result-4-4{left:-160px !important;top:-145px;animation: fadein 5s;}

.result-1-5{right:-160px !important;top:-145px;animation: fadein 0s;}
.result-2-5{top: 135px !important;right: -275px !important ;  !important;animation: fadein 1s; }
.result-3-5{right:-160px !important;top: 440px !important;animation: fadein 2s;}
.result-4-5{left:-160px !important;top: 440px !important;animation: fadein 3s;}
.result-5-5{top: 135px !important;left: -275px !important; animation: fadein 4s;}


.result-1-6{right:-160px !important;top:-145px;animation: fadein 0s;}
.result-2-6{top: 135px !important;right: -275px  !important;animation: fadein 1s; }
.result-3-6{right:-160px !important;top: 440px !important;animation: fadein 2s;}
.result-4-6{left:-160px !important;top: 440px !important;animation: fadein 3s;}
.result-5-6{top: 135px !important;left: -275px  !important; animation: fadein 4s;}
.result-6-6{left:-160px !important;top:-145px;animation: fadein 5s;}

<<<<<<< HEAD
a.nolink:hover{cursor:context-menu !important;background-color:#fff;border-color:#DCE9F2 !important;}

=======
>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a



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




    `;
  }

  constructor() {
    super();
    this.theme = "light";
    this.chart = null;
<<<<<<< HEAD
    this.valeur=null;
  }


  
  static get properties() {
    return {
      valeur: {type: Array},

    };
  }


=======
  }

>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a
  render() {
    return html`



<div style="transform: scale(0.4);">
<div class="social-profile-back-stroke">
              <div class="social-profile-back"></div>
            </div>
            <div class="social-profile">
              <div class="social-profile-inner">
                <img src="web_modules/mv-chart/chartjs/donutchart/img/donut-img.svg" /><br /><span
                  class="title"
                  >Brands</span
                ><br /><span class="result"
                  >${DOUGHNUT_SINGLE_CONFIG.result}</span
                >
              </div>
        

${this.displayDonutBubbles()}
<<<<<<< HEAD

=======
>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a
</div>


      <div class="mv-chart">
        <canvas class="mv-chart-canvas"></canvas>
      </div>
      </div>


<button @click=${this.randomize}>randomise</button>


    `;
  }

  firstUpdated() {
    if (!this.chart) {
      const { type, data, options } = this;
      const plugins = this.plugins || [];
      plugins.push(ChartDataLabels);
      const canvas = this.shadowRoot
        .querySelector(".mv-chart-canvas")
        .getContext("2d");
      this.chart = new Chart(canvas, { type, data, plugins, options });
    }

    
  }




  randomize(){
<<<<<<< HEAD
this.valeur ;


    let nbBulles = DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data.length;


    let i ;
    for (i=0;i<nbBulles;i++){

    DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i] = Math.floor(Math.random() * 100);


  }



   
=======


      DOUGHNUT_SINGLE_CONFIG.result = "70";

      console.log(DOUGHNUT_SINGLE_CONFIG.result);
>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a


      const { type, data, options } = this;
      const plugins = this.plugins || [];
      plugins.push(ChartDataLabels);
      const canvas = this.shadowRoot
        .querySelector(".mv-chart-canvas")
        .getContext("2d");
<<<<<<< HEAD
        this.chart.destroy();
      this.chart = new Chart(canvas, { type, data, plugins, options });


   
this.valeur=null;



=======
      this.chart = new Chart(canvas, { type, data, plugins, options });


>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a

  }

  displayDonutBubbles(){
    let i;
    let loop = new Array();
<<<<<<< HEAD
    this.valeur = new Array();

  
=======
>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a

    let max = DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data.length;
    for (i=0;i<max;i++){
      

      if (DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i]){

<<<<<<< HEAD
        this.valeur[i]= DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i];

        if (DOUGHNUT_SINGLE_CONFIG.data.datasets[0].links[i] != ''){

        
  
          
    loop[i] = html `<a href="${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].links[i]}" target="_blank"  class="result-${i+1}-${max} resultats pos"  style="border:solid 10px ${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].backgroundColor[i]};"><span><span>${DOUGHNUT_SINGLE_CONFIG.data.names[i]}</span><br /><strong id="value-${i}">${this.valeur[i]}</strong></span></a>`; 
        }
        else {

          loop[i] = html `<a class="result-${i+1}-${max} resultats pos nolink"  style="border:solid 10px ${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].backgroundColor[i]};"><span><span>${DOUGHNUT_SINGLE_CONFIG.data.names[i]}</span><br /><strong id="value-${i}">${this.valeur[i]}</strong></span></a>`; 
=======
        if (DOUGHNUT_SINGLE_CONFIG.data.datasets[0].links[i] != ''){
    loop[i] = html `<a href="${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].links[i]}" target="_blank"  class="result-${i+1}-${max} resultats pos"  style="border:solid 10px ${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].backgroundColor[i]};"><span><span>${DOUGHNUT_SINGLE_CONFIG.data.names[i]}</span><br /><strong>${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i]}</strong></span></a>`; 
        }
        else {

          loop[i] = html `<a class="result-${i+1}-${max} resultats pos"  style="cursor:pointer;border:solid 10px ${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].backgroundColor[i]};"><span><span>${DOUGHNUT_SINGLE_CONFIG.data.names[i]}</span><br /><strong>${DOUGHNUT_SINGLE_CONFIG.data.datasets[0].data[i]}</strong></span></a>`; 
>>>>>>> 9397808345006c59f258a77101e9e8ffe843350a


        }
     }


    }
    return  loop;
  }


  
}

customElements.define("mv-chart-donut-single", MvChart);
