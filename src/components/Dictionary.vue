<template>
  <div>
      <h3>Chequeo de Cumplimiento</h3>
      <p>Un formato condicional ha sido proveído sobre la sección de "Chequeo de Cumplimiento" bajo el campo "Estado (%)" y se menciona abajo:</p>
  <b-table-simple hover small caption-top responsive>
   <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    <b-thead head-variant="dark">
      <b-tr>
        <b-th >Escala</b-th>
        <b-th >Color</b-th>
      </b-tr>
    
   
    </b-thead>
    <b-tbody>
     <b-tr>
         <b-th >0-25</b-th>
        <b-th variant='danger'></b-th>
        
         </b-tr>
      <b-tr>
         <b-th >26-75</b-th>
        <b-th variant='warning'></b-th>
        
         </b-tr>
          <b-tr>
         <b-th  >76-100</b-th>
        <b-th variant='success' ></b-th>
        
         </b-tr>
   
    </b-tbody>
     <b-tfoot>
      <b-tr>
        <b-td colspan="2" variant="secondary" class="text-left">
          En el campo "Observaciones" comente la evidencia que usted vió o los comentarios sobre la implementación
        </b-td>
      
        
      </b-tr>
      <b-tr>
            <b-td colspan="2" variant="secondary" class="text-left">
          En el campo "Estado (%)" escriba el nivel de cumplimimiento sobre la escala mencionada mas arriba
        </b-td>
          </b-tr>
        <b-tr>
            <b-td colspan="2" variant="secondary" class="text-left">
          Si alguno de los controles no es aplicable, por favor ponga "NA" o algo que denote que ese control en particular no es aplicable para la organización.
        </b-td>
          </b-tr>
    </b-tfoot>
  </b-table-simple>
</div>
</template>
