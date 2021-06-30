import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {Container, Accordion, Card} from 'react-bootstrap';

function MydModalWithGrid(props) {  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" scrollable="true">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
                Terms and Privacy Policy            
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
            <Container>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Statement of intent! (Click Here)
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>We want you to know exactly how our services work and why we need your details. Reviewing our policy will help you continue using the app with peace of mind.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Container>     
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

