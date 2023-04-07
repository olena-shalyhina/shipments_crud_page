import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getShipments } from '../API/apiServise';
import { getShipmentsData } from '../API/dataService';

const ShipmentList = () => {
  const [shipments, setShipments] = useState('');

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
      console.log(e);
    }
  };

  return (
    <>
      <Table
        striped
        bordered
        border={2}
        hover
        size="lg"
        responsive="lg"
        // className="table-primary"
      >
        <thead>
          <tr>
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
          {shipments
            ? shipments.map((shipment) => (
                <tr>
                  <td>{shipment.orderNo}</td>
                  <td>{shipment.date}</td>
                  <td>{shipment.customer}</td>
                  <td>{shipment.trackingNo}</td>
                  <td>{shipment.status}</td>
                  <td>{shipment.consignee}</td>
                  <td>
                    <Button variant="outline-primary" size="sm">
                      Info
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      Delit
                    </Button>
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </Table>
    </>
  );
};

export default ShipmentList;
