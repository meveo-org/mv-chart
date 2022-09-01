export const DOUGHNUT_SINGLE_CONFIG = {
  type: "doughnut",
  result:"80",
  data: {
   
    names: [
      'Apple',
      'Windows',
      'Nokia',
      'Huawai',
      'Android',
      'linux'
    ],
    datasets: [{
      label: 'Donut',
      data: [30, 10,15,5,20,20],
      backgroundColor: [
        '#f79604',
        '#ed301e',
        '#36ea1e',
        '#e5db20',
        '#1fb8e2',
        '#cc18e0'
      ],
      links : [
        '',
        'http://microsoft.com',
        'http://nokia.com',
        'http://huawai.com',
        'http://google.com',
        'http://linux.org'

      ],
      hoverOffset: 4,
      doughnut:{
        borderWidth:100
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
