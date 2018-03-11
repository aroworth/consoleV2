import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 1)')
    // this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    
    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.5)')
    // this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

    this.gradient3.addColorStop(0, 'rgba( 255, 102, 0, 1)')
    // this.gradient3.addColorStop(0.5, 'rgba(255, 102, 0, 0.25)');
    this.gradient3.addColorStop(1, 'rgba(255, 102, 0, 0)');

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '2XX',
          backgroundColor: this.gradient2,
          data: [400, 390, 310, 410, 392, 280, 340]
        },{
          label: '4XX',
          backgroundColor: this.gradient3,
          data: [60, 55, 32, 10, 2, 12, 53]
        },{
          label: '5XX',
          backgroundColor: this.gradient,
          data: [160, 25, 12, 120, 22, 42, 23]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}