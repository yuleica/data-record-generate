import React from 'react';

import MaterialTable from 'material-table';


//data de inicio
let data = [
  {
      fechaInicioLlamado: 'x',
      fechaTerminoLlamado: 'x',	
      usuario: 'x',
      nombreEjecutivo: 'x',
      idEjecutivo: 'x',
      idCliente: 'x',
      rutEjecutivo: 'x',	
      dvEjecutivo: 'x',
      celular: 'x',
      baseGestion: 'frio',
      producto: 'x',
      cruceSeguros: 0,
      tipoDeLlamado: 'ejecutivo',
      contacto: 'Cotiza',
      resultadoLlamado: 'x',
      detalleLlamado: 'x',
      comentarios: 'x'
  },

  {
      fechaInicioLlamado: 'y',
      fechaTerminoLlamado: 'y',	
      usuario: 'y',
      nombreEjecutivo: 'y',
      idEjecutivo: 'y',
      idCliente: 'y',
      rutEjecutivo: 'y',	
      dvEjecutivo: 'y',
      celular: 'y',
      baseGestion: 'caliente',
      producto: 'y',
      cruceSeguros: 1,
      tipoDeLlamado: 'ejecutivo',
      contacto: 'Lo pensara',
      resultadoLlamado: 'y',
      detalleLlamado: 'y',
      comentarios: 'y'
     
  },
  {
      fechaInicioLlamado: 'a',
      fechaTerminoLlamado: 'a',	
      usuario: 'a',
      nombreEjecutivo: 'a',
      idEjecutivo: 'a',
      idCliente: 'a',
      rutEjecutivo: 'a',	
      dvEjecutivo: 'a',
      celular: 'a',
      baseGestion: 'caliente',
      producto: 'a',
      cruceSeguros: 0,
      tipoDeLlamado: 'bot',
      contacto: 'BuysDialer',
      resultadoLlamado: 'a',
      detalleLlamado: 'a',
      comentarios: 'a'
  }

];

//defino data para salida aleatoria (const)
const basetipollamadodiscador = ['No Contesta (EM)', 'Modem/Fax (EM)', 'Fuera de area o apagado (EM)','Fuera de Servicio (EM)',
                                 'Buzon de voz (EM)', 'Buzon de voz o grabadora (EM)', 'Numero no valido (EM)', 'Telefono ocupado (EM)',
                                 'Fax o Modem (EM)', 'Ocupado (EM)', 'Congestion (EM)', 'Congestionado (EM)', 'No Procesado', 'Not Processed',
                                 'Llamada Fallida', 'AnswerAgentDialer', 'AnswerAnsweringMachineDialer', 'AnswerFaxDialer', 'BuysDialer',
                                 'AnswerOtherDialer', 'Blocked (Discador)', 'No Channel (Discador)', 'Answer - Fax (Discador)', 'Busy (Discador)',
                                 'Categorización por Timeout', 'Processing (Discador)', 'Answer - Others (Discador)', 'RejectedDialer', 
                                 'NoAnswer - Answering Machine (Discador)', 'AnswerQueueDialer', 'Not Defined (Discador)', 
                                 'Answer - Ringing (Discador)', 'Network Error (Discador)', 'AnswerRingingDialer', 'Internal Error (Discador)',
                                 'NoAnswer (Discador)', 'Answer - Answering Machine (Discador)', 'Unallocated (Discador)', 'NetworkErrorDialer', 
                                 'Superó Intentos (Discador)', 'CongestionDialer', 'NoAnswerDialer', 'Answer - Agent (Discador)', 
                                 'RejectedDialer', 'Superó Intentos Máximos Totales', 'Answer - Queued (Discador)',  'Congestion (Discador)',
                                 'No Route (Discador)', 'Assigned (Discador)'];   
                                 
const basetipollamado = ['ejecutivo', 'discador', 'bot'];
const basecontactoejecutivo = ['Volver a llamar','No contesta','Contesta tercero','N° equivocado', 'Fuera de servicio',
                                'cliente inubicable', 'Buzón de Voz', 'Lo pensara', 'Solicita nuevo llamado', 'Cotiza', 'Venta en línea /web/app',
                                'Venta sucursal/call interno', 'Seguimiento', 'Atendido por otro ejecutivo', 'Ya lo contrato'];
const basecruceseguros = [0,1];
const vcontacto = ['Si Titular', 'No contacto', 'Si Tercero'];

//datos que entran por formulario
let controles = {
  minimoRegistro: 5,
  maximoRegistro: 15,
  tipoProducto: 'TDC'
};
const tamano = data.length;

// pinto los datos que faltan (helper)
const rellenarDatos = (controles) => {

  let ibase = 0;
  let illamado = 0;
  let icontacto = 0;
  let resultado = '';
  let index = 0;
    
  if (tamano < controles.minimoRegistro ){

    for ( index = tamano+1; index <= controles.maximoRegistro; index++) {

        illamado !== basetipollamado.length - 1 ? illamado = illamado + 1 : illamado = 0;
        icontacto !== vcontacto.length - 1 ? icontacto = icontacto + 1 : icontacto = 0;

        if (basetipollamado[illamado] === 'ejecutivo' && ibase !== basecontactoejecutivo.length - 1) {
            resultado = basecontactoejecutivo[ibase]
            ibase = ibase + 1}
        else {resultado = basecontactoejecutivo[0]}

        if (basetipollamado[illamado] === 'discador' && ibase !== basetipollamadodiscador.length -1) {
            resultado = basetipollamadodiscador[ibase]
            ibase = ibase + 1}
        else {resultado = basetipollamadodiscador[0]}

        if (basetipollamado[illamado] === 'bot' && ibase !== basetipollamadodiscador.length - 1) {
            resultado = basetipollamadodiscador[ibase]
            ibase = ibase + 1}
        else {resultado = basetipollamadodiscador[0]}
            console.log('resultado')
            console.log(resultado)

        data.push({    
                fechaInicioLlamado: 'zzzzz',
                fechaTerminoLlamado: 'zzzzz',	
                usuario: 'zzzzzzz',
                nombreEjecutivo: 'zzzzzzz',
                idEjecutivo: 'zzzzzz',
                idCliente: 'zzzzzzz',
                rutEjecutivo: 'zzzzzz',	
                dvEjecutivo: 'zzzzz',
                celular: 'zzzzz',
                baseGestion: 'frio',
                producto: controles.tipoProducto, 
                cruceSeguros: 0,
                tipoDeLlamado: basetipollamado[illamado],
                contacto: vcontacto[icontacto],
                resultadoLlamado: resultado,
                detalleLlamado: 'zzzzzz',
                comentarios: 'zzzzzz'
        })
        
    }
  };
};

function App() {

  rellenarDatos(controles)

  const columnas = [{

    title: 'Fecha Inicio',
    field: 'fechaInicioLlamado'
  },
  {
    title: 'Fecha Fin',
    field: 'fechaTerminoLlamado'
  },
  {
    title: 'Usuario',
    field: 'usuario'
  },
  {
    title: ' Id Ejecutivo',
    field: 'idEjecutivo',
  },
  { title: 'Ejecutivo',
    field: 'nombreEjecutivo'
  },
  { title: 'Rut Ejecutivo',
    field: 'rutEjecutivo'
  },
  { title: 'DV Ejecutivo',
    field: 'dvEjecutivo'
  },
  { title: 'Id Cliente',
    field: 'idCliente'
  },
  { title: 'Celular Cliente',
    field: 'celular'
  },  
  { title: 'Base de Gestión',
    field: 'baseGestion'
  },
  { title: 'Producto',
    field: 'producto'
  },  
  { title: 'Cruce Seguros',
    field: 'cruceSeguros'
  },
  { title: 'Tipo de Llamado',
  field: 'tipoDeLlamado'
  },
  { title: 'Contacto',
  field: 'contacto'
  },  
  { title: 'Resultado Llamado',
  field: 'resultadoLlamado'
  },
  { title: 'Detalle Llamado',
  field: 'detalleLlamado'
  },
  { title: 'Comentario',
  field: 'comentarios'
  }
  
];

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columnas}
        data = {data}
        title='Data Record Generate'
        actions={[
          {
            icon: 'edit',
            tooltip: 'editar artista',
            onClick: (event, rowData) => alert('has presionado al artista: '+rowData.artista)
          },
          {
            icon: 'delete',
            tooltip: 'eliminar artista',
            onClick: (event, rowData) => window.confirm('estas seguro que deseas eliminar al artista: '+rowData.artista)
          }]
        }
        options={{
          actionsColumnIndex: -1
        }}
        localization={{
          header: {
            actions: 'Acciones'
          }
        }}
      />
    </div>
  );
}

export default App;
