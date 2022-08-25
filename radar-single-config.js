export const RADAR_SINGLE_CONFIG = {
  type: 'radar',
  data: {
  labels: [
    'Android',
    'Apple',
    'Microsoft',
    'Facebook',
    'Instagram',
    'Press'
  ],
  datasets: [{
    data: [65, 59, 90, 81, 56, 55],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 255, 255)',
    pointBorderColor: 'black',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
    
  }]
},
options: {
  legend: {
    display: false,
    title:false,
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
   elements: {
      line: {
        borderWidth: 3
      }
    }
},
};

