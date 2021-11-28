import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const AddXterModal = (props) => {
  
  return (
    <Modal
      {...props}
      size="lg"
      
      dialogClassName="modal-80w"
      aria-labelledby="xter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="xter" className = 'navy-color  modalTitle'>
          Characters
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

          <Form.Group controlId="formFile" >
            <Form.Label>Description</Form.Label>
            <Form.Control className= 'bg-light' as="textarea" rows={3}/>
          </Form.Group>

          <Form.Label>Friends</Form.Label>
          <Form.Select aria-label="Default select example" variant = 'light' className= 'bg-light'>
            
            {/* <option value="1">
              <Row>
                <h6> Jane Cooper</h6>
                <img src="/images/closesign.png" alt="" />
              </Row>
            </option> */}
            <option value="1">Jane Cooper</option>
            <option value="2">Tyler Giggos</option>
            <option value="3">Blossom Kin</option>
          </Form.Select>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button className = 'fw-bold' variant = 'light' onClick={props.onHide}>CANCEL</Button>

        <Button className= 'text-white fw-bold bg-navy' variant = '' onClick={props.onHide}>CREATE CHARACTER</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default AddXterModal
