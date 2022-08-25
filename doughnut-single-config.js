export const DOUGHNUT_SINGLE_CONFIG = {
  type: "doughnut",
  result:"80",
  data: {
    labels: [
      'Orange',
      'Red',
      'white'
    ],
    names: [
      'Pinterest',
      'Instagram',
      'total'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [60, 20,20],
      backgroundColor: [
        '#f79604',
        '#ed301e',
        '#fff'
      ],
      hoverOffset: 4,
      doughnut:{
        borderWidth:10
      }
    }]
  },
  options: {
    
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold"
        }
      }
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      enabled: false
    }
  }
};
