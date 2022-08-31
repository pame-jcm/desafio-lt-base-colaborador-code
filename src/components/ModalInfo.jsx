import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalInfo = ({show, title, message, onAccept, onCancel, displayCancel}) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onAccept}>Aceptar</Button>
        {
            displayCancel 
            ?
            <Button onClick={onCancel}>Cancelar</Button>
            :
            ''
        }        
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInfo