import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveShipment } from '../store/activeShipmentSlice';

const ShipmentDatails = ({ show, setShow, saveChanges }) => {
  const dispatch = useDispatch();

  const activeShipment = useSelector(
    (state) => state.activeShipment.activeShipment
  );

  const initialFormValue = Object.entries(activeShipment);

  const handleClose = () => setShow(false);

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
        <Modal.Header closeButton>
          <Modal.Title className="text-success text-uppercase fs-6">
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
                  autoFocus
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success m-2" size="sm" onClick={saveChanges}>
            Save Changes
          </Button>
          <Button variant="outline-danger m-2" size="sm" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShipmentDatails;
