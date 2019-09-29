<template>
  <div>
    <h2>Cumplimiento de control</h2>
    <b-table-simple hover small caption-top responsive>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Objetivos</b-th>
          <b-th>Estado</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(name,index) in controlNames()">
          <b-th>{{name}}</b-th>
          <b-th variant="danger" v-if="states[index]>=0 && states[index]<=25">{{states[index]}}</b-th>
          <b-th variant="warning" v-else-if="states[index]>=26 && states[index]<=75">{{states[index]}}</b-th>
          <b-th variant="success" v-else-if="states[index]>=76 && states[index]<=100">{{states[index]}}</b-th>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      states: []
    }
  },
  mounted() {
    if (this.$store.state.data !== null) {
      this.data = JSON.parse(this.$store.getters.data)
      localStorage.data = JSON.stringify(this.data);
    }
    else if (localStorage.data) {
      this.data = JSON.parse(localStorage.data)
    }
    else {
      this.data = require('../politicas.json')
      console.log(this.data.dominios[0].nombre)
    }
    this.states = this.controlStates()
  },
  methods: {
    controlNames() {
      let names = []
      this.data.dominios.forEach((dominio) => {
        dominio.controles.forEach((control) => {
          names.push(control.nombre)
        })
      })
      return names
    },
    controlStates() {
      let states = []
      this.data.dominios.forEach((dominio) => {
        dominio.controles.forEach((control) => {
          let sumControl = 0
          let cont = 0
          control.secciones.forEach((seccion) => {
            seccion.objetivos.forEach((objetivo) => {
              sumControl += parseInt(objetivo.estado)
              cont++
            })
          })
          states.push(sumControl/cont)
        })
      })
      return states
    }
  }
}
</script>