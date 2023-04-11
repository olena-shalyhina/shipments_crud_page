import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveShipment } from '../store/activeShipmentSlice';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ShipmentDatails = ({ show, handleClose, saveChanges }) => {
  const dispatch = useDispatch();

  const activeShipment = useSelector(
    (state) => state.activeShipment.activeShipment
  );

  const initialFormValue = Object.entries(activeShipment);

  const handleChangeInputValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(
      setActiveShipment({
        ...activeShipment,
        [name]: value,
      })
    );
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size={'lg'}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="text-primary text-uppercase fs-6 bg-light">
            Shipment datails
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="row row-cols-lg-2 row-col-sm-1 g-4">
            {initialFormValue.map((elem) => (
              <Form.Group
                controlId={initialFormValue.indexOf(elem) + 1}
                key={initialFormValue.indexOf(elem) + 1}
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
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary m-2" size="sm" onClick={saveChanges}>
            {'Save Changes'.toUpperCase()}
          </Button>
          <Button variant="outline-danger m-2" size="sm" onClick={handleClose}>
            {'Close'.toUpperCase()}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShipmentDatails;
