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
  links: [
    'http://google.com',
    'http://apple.com',
    '',
    'http://facebook.com',
    'http://instagram.com',
    'http://lemonde.fr'
  ],
  datasets: [{
    data: [10, 30, 20, 40,20, 10],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0)',
    borderColor: '#FF1A44',
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
}
};

