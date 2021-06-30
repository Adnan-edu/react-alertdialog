import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MydModalWithGrid(props) {  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" scrollable="true">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
                Terms and Privacy Policy            
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      </Modal.Body>
      <Modal.Footer>
        <h2>Modal Footer</h2>
      </Modal.Footer>
    </Modal>
  );
};

export const Example = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MydModalWithGrid dialogClassName="modal-90w" show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

