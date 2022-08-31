import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const ListColaborador = ({BaseColaboradoresT, NombreColaborador, OnClickEditColaborador, OnClickEliminarColaborador}) => {

    const onClickEdit = (e) => {
        if (e.target.tagName === 'svg')
            OnClickEditColaborador(e.target.parentElement.parentElement.parentElement.children[0].textContent)
        else if (e.target.tagName === 'path')
            OnClickEditColaborador(e.target.parentElement.parentElement.parentElement.parentElement.children[0].textContent)
        else    
            OnClickEditColaborador(e.target.parentElement.parentElement.children[0].textContent)
    }

    const onClickEliminar = (e) => {
        if (e.target.tagName === 'svg')
            OnClickEliminarColaborador(e.target.parentElement.parentElement.parentElement.children[0].textContent)
        else if (e.target.tagName === 'path')
            OnClickEliminarColaborador(e.target.parentElement.parentElement.parentElement.parentElement.children[0].textContent)
        else    
            OnClickEliminarColaborador(e.target.parentElement.parentElement.children[0].textContent)
    }

  return (
    <Container>
        <Table striped hover responsive size="sm" className='my-5' >
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre Colaborador</th>
                    <th>Correo Colaborador</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                    NombreColaborador === ''
                    ?
                    BaseColaboradoresT.map(colaborador => {
                        return(
                            <tr key={colaborador.id}>
                                <td>{colaborador.id}</td>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.correo}</td>
                                <td>
                                    <Button size="sm" className="mx-2 d-none" 
                                        onClick={onClickEdit}>
                                            <FontAwesomeIcon icon={faEdit} className="text-white"/></Button>
                                    <Button size="sm" 
                                        onClick={onClickEliminar}>
                                            <FontAwesomeIcon icon={faTrash} className="text-white"/></Button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    BaseColaboradoresT.filter(colaborador => (colaborador.nombre.toUpperCase()).includes(NombreColaborador.toUpperCase())).map(colaborador => {
                        return(
                            <tr key={colaborador.id}>
                                <td>{colaborador.id}</td>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.correo}</td>
                                <td>
                                <Button size="sm" className="mx-2 d-none" 
                                        onClick={onClickEdit}>
                                            <FontAwesomeIcon icon={faEdit} className="text-white"/></Button>
                                    <Button size="sm" 
                                        onClick={onClickEliminar}>
                                            <FontAwesomeIcon icon={faTrash} className="text-white"/></Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
    </Container>
  )
}

export default ListColaborador
