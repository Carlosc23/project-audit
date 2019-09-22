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
          <b-th colspan="2">Resultado</b-th>
        </b-tr>
        <b-tr>
          <b-th>Checklist</b-th>
          <b-th>Estandar</b-th>
          <b-th>Sección</b-th>
          <b-th>Pregunta de Auditoría</b-th>
          <b-th>Observaciones</b-th>
          <b-th>Estado</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-th variant="success" class="text-left" colspan="7">Política de Seguridad</b-th>
        </b-tr>
        <b-tr>
          <b-th>1.1</b-th>
          <b-th>5.1</b-th>

          <b-th class="text-left" colspan="4">Políticas de Seguridad de Información</b-th>
        </b-tr>
        <b-tr>
          <b-th rowspan="2">1.1.1</b-th>
          <b-th rowspan="2">5.1.1</b-th>
          <b-td class="text-left" rowspan="2">Documento de la Política de Seguridad de Información</b-td>
          <b-td>Existe una Política de Seguridad de la Información, que es aprobada por la dirección, publicada y comunicada según proceda, a todos los empleados?</b-td>
          <b-td>
            <b-input-group size="lg">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-td>
          <b-td variant="danger">
            <b-input-group size="sm">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-td>
        </b-tr>
        <b-tr>
          <b-td
            class="text-right"
          >Establecen las políticas un compromiso de las Gerencias con relación al método de la organización para la gestión de la seguridad de la información?</b-td>
          <b-td>
            <b-input-group size="lg">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-td>
          <b-td variant="danger">
            <b-input-group size="sm">
              <b-form-input></b-form-input>
            </b-input-group>
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
