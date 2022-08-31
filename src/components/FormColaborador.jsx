import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const FormColaborador = ({OnClickColaborador, OnLoadFormEdit}) => {

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const limpiarColaborador = () => {
        setId('');
        setNombre('');
        setCorreo('');
    }

    /* const OnLoadFormEditLocal = (element) => {
        console.log('llego por aquí')
        console.log(element);
    } */

  return (
    <div>
        <Container>
                <input hidden onChange = {(e) => setId(e.target.value) } value = {id} />
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre Colaborador"
                            className="my-3">
                            <Form.Control 
                                    type="text" 
                                    name="nombre"
                                    placeholder="Nombre"
                                    onChange = {(e) => setNombre(e.target.value) } 
                                    value = {nombre}
                            />
                        </FloatingLabel>

                        <FloatingLabel 
                            controlId="floatingPassword" 
                            label="Correo Colaborador"
                            className="mb-3">
                            <Form.Control 
                                    type="email" 
                                    name="correo"
                                    placeholder="Correo"
                                    onChange = {(e) => setCorreo(e.target.value) }
                                    value = {correo}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <Button className='w-100' 
                            onClick={() => {
                                if (nombre === '' && correo === '') return ''
                                OnClickColaborador({id: id, nombre: nombre, correo: correo});
                                limpiarColaborador();
                            }}>
                            Ingresar
                        </Button>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default FormColaborador