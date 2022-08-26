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
      labels: {
        usePointStyle: true,
      },

    
  },
  tooltips: {
    enabled: false,
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
    },
    pointLabel:{
      display:false
    }
  },
  plugins: {
    datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: Math.round,
        font: {
            weight: 'bold'
        },
        display:false
    }
},
   elements: {
      line: {
        borderWidth: 3
      }
    }
},
};

