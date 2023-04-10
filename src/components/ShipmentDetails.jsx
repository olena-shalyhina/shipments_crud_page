import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ShipmentDatails = ({
  show,
  setShow,
  shipment,
  setShipment,
  saveChanges,
}) => {
  // const { show, setShow, shipment, setShipment, saveChanges } = props;
  const handleClose = () => setShow(false);
  const formData = Object.entries(shipment);

  const handleChangeInputValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setShipment({
      ...shipment,
      [name]: value,
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size={'md'}>
        <Modal.Header closeButton>
          <Modal.Title className="text-secondary text-uppercase fs-6">
            Shipment datails
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {formData.map((elem) => (
              <Form.Group
                className=""
                controlId={formData.indexOf(elem) + 1}
                key={formData.indexOf(elem) + 1}
              >
                <Form.Label className="text-secondary">
                  {elem[0].toUpperCase()}
                </Form.Label>
                <Form.Control
                  disabled={elem[0] === 'orderNo'}
                  onChange={handleChangeInputValue}
                  type="input"
                  name={elem[0]}
                  defaultValue={elem[1]}
                  autoFocus
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShipmentDatails;
