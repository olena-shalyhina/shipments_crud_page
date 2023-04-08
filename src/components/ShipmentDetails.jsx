import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ShipmentDatails = (props) => {
  const handleClose = () => props.setShow(false);
  const formData = Object.entries(props.shipment);
  console.log(formData);
  console.log(formData.indexOf(formData[0]));
  console.log(formData[0]);
  console.log(formData[0]);
  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        size={'md'}
        className="fs-6 lh-1"
      >
        <Modal.Header closeButton>
          <Modal.Title>Shipment datails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formData.map((elem) => (
            <Form key={formData.indexOf(elem) + 1}>
              <Form.Group
                className="mb-3"
                controlId={formData.indexOf(elem) + 1}
              >
                <Form.Label>{elem[0].toUpperCase()}</Form.Label>
                <Form.Control type="input" defaultValue={elem[1]} autoFocus />
              </Form.Group>
            </Form>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShipmentDatails;
