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
          <b-th>No.</b-th>
          <b-th>Dominio</b-th>
          <b-th>Estado (%)</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in items" :key="index">
          <b-th>{{index+1}}</b-th>
          <b-th>{{item.title}}</b-th>
          <b-th variant="danger"></b-th>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Políticas de Seguridad"
      },
      {
        title: "Organización de la Seguridad de Información"
      },
      {
        title: "Manejo de Activos"
      },
      {
        title: "Seguridad de Recursos Humanos"
      },
      {
        title: "Seguridad Física y Ambiental"
      },
      {
        title: "Gestión de Comunicaciones y Operaciones"
      },
      {
        title: "Control de Acceso"
      },
      {
        title:
          "Desarrollo, Adquisición y Mantenimiento de Sistemas de Información"
      },
      {
        title: "Gestión de Incidentes de Seguridad de Información"
      },
      {
        title: "Gestión de la Continuidad del Negocio"
      },
      {
        title: "Cumplimiento"
      }
    ]
  })
};
</script>