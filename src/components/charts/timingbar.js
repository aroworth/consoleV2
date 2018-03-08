import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            display: false,
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
        responsive: false,
        height: 50,
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