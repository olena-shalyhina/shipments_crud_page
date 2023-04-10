import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShipments, setShipments } from '../store/shipmentsSlice';
import { setActiveShipment } from '../store/activeShipmentSlice';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/shipmentsList.css';
import ShipmentDatails from './ShipmentDetails';

const ShipmentTable = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const shipments = useSelector((state) => state.shipments.shipments);
  const isLoading = useSelector((state) => state.shipments.isLoading);
  const error = useSelector((state) => state.shipments.error);
  const activeShipment = useSelector(
    (state) => state.activeShipment.activeShipment
  );

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  const handleShow = (orderNo) => {
    dispatch(
      setActiveShipment(
        shipments.find((shipment) => shipment.orderNo === orderNo)
      )
    );
    setShow(true);
  };

  const handleDelete = (orderNo) => {
    dispatch(
      setShipments(shipments.filter((shipment) => shipment.orderNo !== orderNo))
    );
  };

  const saveChanges = () => {
    dispatch(
      setShipments(
        shipments.map((shipment) =>
          shipment.orderNo === activeShipment.orderNo
            ? activeShipment
            : shipment
        )
      )
    );
  };

  if (isLoading) {
    return <Spinner animation="border" variant="primary" size="lg" />;
  }

  if (error) {
    return error;
  }

  return (
    <>
      <Table striped hover size="sm">
        <thead className="table-success text-success text-uppercase  border border-1 border-success  lh-5">
          <tr>
            <th>N</th>
            <th>Orderno</th>
            <th>Deliverydata</th>
            <th>Customer</th>
            <th>Trackingno</th>
            <th>Status</th>
            <th>Consignee</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border border-1 border-success align-middle">
          <>
            {shipments.map((shipment) => (
              <tr key={shipment.orderNo}>
                <td>{shipments.indexOf(shipment) + 1}</td>
                <td>{shipment.orderNo}</td>
                <td>{shipment.date}</td>
                <td>{shipment.customer}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td>
                  <div className="d-flex align-self-center">
                    <Button
                      variant="outline-success m-1"
                      size="sm"
                      onClick={() => handleShow(shipment.orderNo)}
                    >
                      &#8690;
                    </Button>
                    <Button
                      variant="outline-danger m-1"
                      size="sm"
                      onClick={() => handleDelete(shipment.orderNo)}
                    >
                      &#10005;
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </Table>
      <ShipmentDatails
        show={show}
        setShow={setShow}
        saveChanges={saveChanges}
      />
    </>
  );
};

export default ShipmentTable;
