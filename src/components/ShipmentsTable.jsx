import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getShipments } from '../API/apiServise';
import { getShipmentsData } from '../API/dataService';
import '../styles/shipmentsList.css';
import ShipmentDatails from './ShipmentDetails';

const ShipmentTable = () => {
  const [shipments, setShipments] = useState('');
  const [shipment, setShipment] = useState('');

  const [show, setShow] = useState(false);

  const handleShow = (orderNo) => {
    setShipment(shipments.find((shipment) => shipment.orderNo === orderNo));
    setShow(true);
  };

  const handleDelete = (orderNo) => {
    setShipments(shipments.filter((shipment) => shipment.orderNo != orderNo));
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  // const fetchShipments = async () => {
  //   // const data = await getShipments();
  //   const data = await getShipmentsData();
  //   setShipments(data);
  //   console.log(shipments);
  // };

  const fetchShipments = async () => {
    try {
      const data = await getShipments();
      setShipments(data);
      console.log(shipments);
    } catch (e) {
      console.error(e);
    }
  };

  const saveChanges = () => {
    setShipments(
      shipments.map((elem) =>
        elem.orderNo === shipment.orderNo ? shipment : elem
      )
    );
  };

  return (
    <div className="m-1 border border-1 border-primary">
      <Table className="" striped size="lg">
        <thead className="table-secondary text-secondary text-uppercase  border border-start-0 border-end-0 border-top-0 border-1 border-primary lh-5">
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
        <tbody>
          <>
            {shipments
              ? shipments.map((shipment) => (
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
                          variant="outline-primary m-1"
                          size="sm"
                          // onClick={handleShow}
                          onClick={() => handleShow(shipment.orderNo)}
                          // value={shipment.orderNo}
                        >
                          &#8690;
                        </Button>
                        <Button
                          variant="outline-danger m-1"
                          size="sm"
                          onClick={() => handleDelete(shipment.orderNo)}
                          // value={shipment.orderNo}
                        >
                          &#10005;
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              : ''}
          </>
        </tbody>
      </Table>
      <ShipmentDatails
        show={show}
        setShow={setShow}
        shipment={shipment}
        setShipment={setShipment}
        saveChanges={saveChanges}
      />
    </div>
  );
};

export default ShipmentTable;
