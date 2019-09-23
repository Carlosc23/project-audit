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
      <b-tbody>
        <b-tr>
          <b-th variant="success" class="text-left" colspan="7">Política de Seguridad</b-th>
        </b-tr>
        <b-tr>
          <b-th>1.1</b-th>
          <b-th>5.1</b-th>

          <b-th class="text-left" colspan="5">Políticas de Seguridad de Información</b-th>
        </b-tr>
        <b-tr>
          <b-th rowspan="2">1.1.1</b-th>
          <b-th rowspan="2">5.1.1</b-th>
          <b-td class="text-left" rowspan="2">Documento de la Política de Seguridad de Información</b-td>
          <b-td>Existe una Política de Seguridad de la Información, que es aprobada por la dirección, publicada y comunicada según proceda, a todos los empleados?</b-td>
          <b-td>
            {{observation}}
          </b-td>
          <b-td variant="danger" v-if="state>=0 && state<=25">
            {{state}}
          </b-td >
          <b-td variant="warning" v-else-if="state>=26 && state<=75">
            {{state}}
          </b-td >
          <b-td variant="success" v-else-if="state>=76 && state<=100">
            {{state}}
          </b-td >
          <b-td >
            <b-button v-b-modal.modal-prevent-closing>Editar</b-button>
   <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Observaciones y punteo de pregunta de auditoría"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Observaciones"
          label-for="observation-input"
          invalid-feedback="Observation is required"
        >
          <b-form-input
            id="observation-input"
            v-model="observation"
            required
          ></b-form-input>
          
        </b-form-group>
        <b-form-group
          :state="stateState"
          label="Estado (%)"
          label-for="state-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="state-input"
            v-model="state"
            :state="stateState"
            required
          ></b-form-input>
          
        </b-form-group>
      </form>
    </b-modal>
          </b-td>
        </b-tr>
        <b-tr>
          <b-td
            class="text-right"
          >Establecen las políticas un compromiso de las Gerencias con relación al método de la organización para la gestión de la seguridad de la información?</b-td>
          <b-td>
          </b-td>
          <b-td variant="danger">
  
          </b-td>
          <b-td >

          </b-td>
        </b-tr>
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
        observation:'',
        state:0
      }
    },
   mounted() {
    if (localStorage.observation) {
      this.observation = localStorage.observation || ''; 
    }
    if (localStorage.state) {
      this.state = localStorage.state || 0;
    }
  },
  methods:{
   
    handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        
        // Assign to localStorage the info
        localStorage.observation = this.observation;
        localStorage.state = this.state;
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      },

  }
}
</script>