export const BUBBLE_SINGLE_CONFIG = {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 1,
        y: 27,
        r: 50
      }],
      backgroundColor: 'rgba(111, 203, 214, 1)',
      hoverBackgroundColor:'#DCE9F2'
    },{
      label: 'Second Dataset',
      data: [{
        x: 6,
        y: 18,
        r: 25
      }],
      backgroundColor: 'rgba(247, 188, 39, 1)',
      hoverBackgroundColor:'#DCE9F2'
    },{
      label: 'Third Dataset',
      data: [{
        x: 4,
        y: 6,
        r: 40
      }],
      backgroundColor: 'rgba(242, 109, 109, 1)',
      hoverBackgroundColor:'#DCE9F2'
    }]
  },
  options: {

    
      layout: {
          padding: 200
      },
  


      legend: {
          display: false,
      },
      tooltips: {
        enabled: false,
      },
  
    

    scales: {
      display:false,

      yAxes: [
        
        
        {
          ticks: {
            beginAtZero: true,
            color:'rgb(255,255,255,0)',
            display:false,
            drawTicks:false
          },
          gridLines: {
            drawOnChartArea: false,
            display: false
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            color:'rgb(255,255,255,0)',
            display:false,
            drawTicks:false
          },
          gridLines: {
            drawOnChartArea: false,
            display: false
          }
        }
      ]
    }
    
},
};
