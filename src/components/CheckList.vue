<template>
  <div>
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
          <b-th colspan="2">Referencia</b-th>
          <b-th colspan="2">Area de Auditoría, objetivo y pregunta</b-th>
          <b-th colspan="3">Resultado</b-th>
        </b-tr>
        <b-tr>
          <b-th>Checklist</b-th>
          <b-th>Estandar</b-th>
          <b-th>Sección</b-th>
          <b-th>Pregunta de Auditoría</b-th>
          <b-th>Observaciones</b-th>
          <b-th>Estado</b-th>
          <b-th>Edición</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-for="(dominio, indexDominio) in data.dominios">
        <b-tr>
          <b-th variant="success" class="text-left" colspan="7">{{dominio.nombre}}</b-th>
        </b-tr>
        <template v-for="(control, indexControl) in dominio.controles">
          <b-tr>
            <b-th>{{`${indexDominio + 1}.${indexControl + 1}`}}</b-th>
            <b-th>{{`${dominio.numero}.${indexControl + 1}`}}</b-th>

            <b-th class="text-left" colspan="5">{{control.nombre}}</b-th>
          </b-tr>
          <template v-for="(seccion, indexSeccion) in control.secciones">
            <b-tr v-for="(objetivo, indexObjetivo) in seccion.objetivos">
              <b-th v-bind:style="{ color: seccionColor(indexObjetivo)}">{{`${indexDominio + 1}.${indexControl + 1}.${indexSeccion + 1}`}}</b-th>
              <b-th v-bind:style="{ color: seccionColor(indexObjetivo)}">{{`${dominio.numero}.${indexControl + 1}.${indexSeccion + 1}`}}</b-th>
              <b-td class="text-left" v-bind:style="{ color: seccionColor(indexObjetivo)}">{{seccion.nombre}}</b-td>
              <b-td>{{objetivo.pregunta}}</b-td>
              <b-td><input v-model="objetivo.observaciones"/></b-td>
              <b-td variant="danger" v-if="objetivo.estado>=0 && objetivo.estado<=25"><input v-model="objetivo.estado"/></b-td>
              <b-td variant="warning" v-else-if="objetivo.estado>=26 && objetivo.estado<=75"><input v-model="objetivo.estado"/></b-td>
              <b-td variant="success" v-else-if="objetivo.estado>=76 && objetivo.estado<=100"><input v-model="objetivo.estado"/></b-td>
              <b-td>
                <b-button v-on:click="saveData">Guardar</b-button>
              </b-td>
            </b-tr>
          </template>
        </template>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="7" variant="secondary" class="text-right"></b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      observation: "",
      state: 0
    };
  },
  mounted() {
    if (localStorage.observation) {
      this.observation = localStorage.observation || "";
    }
    if (localStorage.state) {
      this.state = localStorage.state || 0;
    }
    if (this.$store.state.data !== null){
      this.data = JSON.parse(this.$store.getters.data)
    }
    else if (localStorage.data) {
      this.data = JSON.parse(localStorage.data)
      this.saveData()
    }
    else {
      this.data = require('../politicas.json')
      /* console.log(this.data.dominios[0].nombre) */
      this.saveData()
    }
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      // Assign to localStorage the info
      localStorage.observation = this.observation;
      localStorage.state = this.state;
      this.$nextTick(() => {
        this.$refs.modal.forEach(modal =>{ modal.hide()});
      });
    },
    seccionColor(index) {
      if (index == 0)
        return '#212529'
      else {
        return '#f8f9fa'
      }
    },
    saveData() {
      /* console.log("saving data...") */
      this.$store.replaceState({data:JSON.stringify(this.data)})
      localStorage.data = JSON.stringify(this.data);
      /* console.log(this.$store.state.data) */
    }
  }
};
</script>
