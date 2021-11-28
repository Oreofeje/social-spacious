import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const AddPlanetModal = (props) => {
  
  
  return (
    <Modal
      {...props}
      size="lg"
      
      dialogClassName="modal-80w"
      aria-labelledby="planet"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="planet" className = 'navy-color  modalTitle'>
          Planet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form class= 'mb-5'>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control className= 'bg-light' type="file" size="sm" /> <Form.Text className="text-muted">
            Paste the URL of a JPG or PNG of max 20 KB
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formFile">
            <Form.Label>Name</Form.Label>
            <Form.Control className= 'bg-light' type="text"  size="sm"/>
          </Form.Group>

          <Form.Group controlId="formFile">
            <Form.Label>Description</Form.Label>
            <Form.Control className= 'bg-light' variant = '' as="textarea" rows={3}/>
          </Form.Group>


        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button className = 'fw-bold' variant = 'light' onClick={props.onHide}>CANCEL</Button>

        <Button className= 'text-white fw-bold bg-navy' variant = 'light' onClick={props.onHide}>CREATE PLANET</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPlanetModal
