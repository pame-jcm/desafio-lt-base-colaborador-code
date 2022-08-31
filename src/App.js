
import './App.css';
import FormColaborador from './components/FormColaborador';
import ListColaborador from './components/ListColaborador';
import NavColaborador from './components/NavColaborador';
import BaseColaboradores from './BD_colaborador';
import { useState } from 'react';
import ModalInfo from './components/ModalInfo';

function App() {

  const [ modalShow, setModalShow ] = useState({estado:false, title:'', message:'', displayCancel:false});
  
  const [ colaboradorList, setColaboradorList ] = useState(BaseColaboradores);
  const [ colaborador, setColaborador ] = useState('');
  const [ idColaborador, setIdColaborador ] = useState(0);

  const handleColaboradorList = (colaborador) => {
      setColaboradorList([...colaboradorList, {id:Math.max(...colaboradorList.map(colaborador => colaborador.id)) + 1, nombre: colaborador.nombre, correo: colaborador.correo}]);
      setModalShow({estado:true, title:'Información', message:'Colaborador Ingresado.', displayCancel:false})
  }

  const handleFilterColaborador = (nombreColaborador) => {
      setColaborador(nombreColaborador);
  }

  const handleEditColaborador = (id) => {
    console.log(id);
    let elementEdit = colaboradorList.filter(element => parseInt(element.id) === parseInt(idColaborador));

    return elementEdit;
  }

  const handleEliminarColaborador = (id) => {
    setIdColaborador(id);
    setModalShow({estado:true, title:'Confirmación', message:`Está seguro de Eliminar el id: ( ${id} )???`, displayCancel:true});
  }

  const eliminarID = () => {
      setModalShow({estado:false, title:'', message:'', displayCancel:false});

      let index = colaboradorList.findIndex(element => parseInt(element.id) === parseInt(idColaborador));
      colaboradorList.splice(index,1);
      setColaboradorList([...colaboradorList]);
  }

  return (
    <div>
      <NavColaborador OnClickFilterColaborador ={handleFilterColaborador}/>

      <FormColaborador OnClickColaborador={handleColaboradorList} OnLoadFormEdit={handleEditColaborador} />

      <ListColaborador 
        BaseColaboradoresT={colaboradorList} 
        NombreColaborador={colaborador}
        OnClickEditColaborador={handleEditColaborador}
        OnClickEliminarColaborador={handleEliminarColaborador}
      />

      <ModalInfo
        show={modalShow.estado}
        onAccept={() => {
          !modalShow.displayCancel 
          ?
            setModalShow({estado:false, title:'', message:'', displayCancel:false})
          :
            eliminarID()
          }
        }
        onCancel={() => setModalShow({estado:false, title:'', message:'', displayCancel:false})}
        title={modalShow.title}
        message={modalShow.message}
        displayCancel = {modalShow.displayCancel}
      />
    </div>
  );
}

export default App;
