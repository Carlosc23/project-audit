<template>
  <div>
    <apexchart
      width="900"
      type="bar"
      :options="chartOptions"
      :series="series" />
    <apexchart
      width="900"
      type="bar"
      :options="chartControlOptions"
      :series="controlSeries" />

  </div>
</template>
<script>
export default {
  created() {
    if (this.$store.state.data !== null) {
      this.data = JSON.parse(this.$store.getters.data)
      localStorage.data = JSON.stringify(this.data);
    }
    else if (localStorage.data) {
      this.data = JSON.parse(localStorage.data)
    }
    else {
      this.data = require('../politicas.json')
    }

    this.calculateVariables()

    this.chartOptions = {
      ...this.chartOptions,
      xaxis: {
        ...this.chartOptions.xaxis,
        categories:  this.categoriesPerSection,
      },
    }

    this.series = [
      {
        name: 'compliance (%)',
        data: this.weightsPerSection,
      },
    ]

    this.chartControlOptions = {
      ...this.chartControlOptions,
      xaxis: {
        ...this.chartOptions.xaxis,
        categories: this.categoriesPerControl,
      },
    }

    this.controlSeries = [
      {
        name: 'compliance(%)',
        data: this.weightsPerControl,
      }
    ]
  },

  methods: {
    calculateVariables() {
      this.weightsPerSection = []
      this.categoriesPerSection = []
      this.weightsPerControl = []
      this.categoriesPerControl = []
      for (let domain of this.data.dominios) {
        this.categoriesPerSection.push(domain.nombre)
        let sum = 0
        let num = 0
        for (let control of domain.controles) {
          this.categoriesPerControl.push(control.nombre)
          let sumControl = 0
          let numControl = 0
          for (let section of control.secciones) {
            for (let objectives of section.objetivos) {
              sum += parseFloat(objectives.estado)
              sumControl += parseFloat(objectives.estado)
            }
            num += section.objetivos.length;
            numControl += section.objetivos.length
          }
          let controlWeight = sumControl / (numControl * 100) * 100
          this.weightsPerControl.push(controlWeight)
        }
        let sectionWeight = sum / (num * 100) * 100
        this.weightsPerSection.push(sectionWeight)
      }
    }
  },

  data() {
    return {
      chartOptions: {
        title: {
          text: 'Cumplimiento por sección',
          align: 'middle'
        },
        chart: {
          id: 'by-section'
        },
        yaxis: {
          decimalsInFloat: 2,
          min:0,
          max: 100,
          title: {
            text: 'Cumplimiento (%)'
          }
        },
        dataLabels: {
          offsetY: 60,
          formatter(val) {
            return val.toFixed(2)
          },
          style: {
            colors: ['#000000'],
          },
        },
      },
      chartControlOptions: {
        title: {
          text: 'Cumplimiento por control',
          align: 'middle'
        },
        chart: {
          id: 'by-control'
        },
        yaxis: {
          decimalsInFloat: 2,
          min:0,
          max: 100,
          title: {
            text: 'Cumplimiento (%)'
          }
        },
        dataLabels: {
          offsetY: 60,
          formatter(val) {
            return val.toFixed(2)
          },
          style: {
            colors: ['#000000']
          },
        },
      },
      series: [],
      controlSeries: []
    }
  },
};
</script>
