import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {Container, Accordion, Card, Tabs, Tab, Form} from 'react-bootstrap';

function MydModalWithGrid(props) {
    const [accept, setAccept] = useState(true)
    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" scrollable="true">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
                Terms and Privacy Policy            
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
            <Container>
                <Accordion>
                    <Card id="accordionId">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Statement of intent! (Click Here)
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>We want you to know exactly how our services work and why we need your details. Reviewing our policy will help you continue using the app with peace of mind.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>    
            <Container>
                <ControlledTabs/>            
            </Container> 
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Form>
            <Form.Group>
              <Form.Check type="checkbox" onChange={e=>{ setAccept(!accept); console.log(accept);}} label="I have read and agree to the Terms and Privacy Policy"/>
            </Form.Group>
          </Form> 
        </Container>
          <Button onClick={props.onHide}>Cancel</Button>
          <Button onClick={props.onHide} disabled={accept}>Accept</Button> 
      </Modal.Footer>
    </Modal>
  );
};

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Terms of Use">
        <Container>
          <p class="text-left font-weight-bold">What personal information we collect</p>
          <p class="font-weight-normal">Depending on how you engage with Cogniss Services, we collect different kinds of information from or about you.</p>

          <p class="text-left font-weight-bold">Account and profile information</p>
          <p class="font-weight-normal">We collect information about you when you register for an account ...</p>

          <p class="text-left font-weight-bold">Information you provide to us</p>
          <p class="font-weight-normal">We collect and store any content that you create, post, send ...</p>
        </Container>
      </Tab>
      <Tab eventKey="profile" title="Privacy Policy">
        <Container>
          <p class="text-left font-weight-bold">Privacy Policy</p>
          <p class="text-left font-weight-bold">What personal information we collect</p>
          <p class="font-weight-normal">Depending on how you engage with Cogniss Services, we collect different kinds of information from or about you.</p>

          <p class="text-left font-weight-bold">Account and profile information</p>
          <p class="font-weight-normal">We collect information about you when you register for an account ...</p>

          <p class="text-left font-weight-bold">Information you provide to us</p>
          <p class="font-weight-normal">We collect and store any content that you create, post, send ...</p>
        </Container>      
      </Tab>
    </Tabs>
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

