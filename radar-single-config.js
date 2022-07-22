
var reception = [
  {label:'Politics', value:65}, 
  {label:'Russia', value:59},
  {label:'Attack', value:90},
  {label:'Lawyer', value:81},
  {label:'Spy', value:56},
  {label:'Press', value:55}
];



export const RADAR_CONFIG = {
  type: 'radar',
  data: {
  labels: [ reception[0].label+' '+reception[0].value+' hits',reception[1].label+' '+reception[1].value+' hits',reception[2].label+' '+reception[2].value+' hits',reception[3].label+' '+reception[3].value+' hits',reception[4].label+' '+reception[4].value+' hits',reception[5].label+' '+reception[5].value+' hits'],
  datasets: [{
    label: 'Online Mentions Results',
    data: [ reception[0].value,reception[1].value,reception[2].value,reception[3].value,reception[4].value,reception[5].value],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 255, 255)',
    pointBorderColor: 'black',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
},
options: {
  legend: {
    display: false,
  },
 
  gridLines: {
    display: false
  },
  scale: {

     ticks: {
         maxTicksLimit: 1,
        display: false,
        drawTicks:false
     },
     gridLines: {
      drawOnChartArea: false,
      display: false
    }
  },
  events: ['click'],
  onClick:function(e){
    var activePoints = this.getElementsAtEvent(e);
    var selectedIndex = activePoints[0]._index;
    alert(this.data.datasets[0].data[selectedIndex]);
  }
},

};


