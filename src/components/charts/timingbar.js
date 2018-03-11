import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            barThickness : 10,
            categorySpacing: 0,
            
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            display: false,
            barThickness : 10,
            categorySpacing: 1,
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    // Overwriting base render method with actual data.

    this.renderChart({

      datasets: [
        {
          label: 'Seconds',
          backgroundColor: '#92f442',
          data: [12.3]
        }
      ]
    }, this.options)
  }
}