import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { getShipments } from '../API/apiServise';
import '../styles/shipmentsList.css';
import ShipmentDatails from './ShipmentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShipments, setShipments } from '../store/shipmentsSlice';

const ShipmentTable = () => {
  // const [shipments, setShipments] = useState('');
  // const [shipments, setShipments] = useState('');
  const [shipment, setShipment] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const shipments = useSelector((state) => state.shipments.shipments);
  const isLoading = useSelector((state) => state.shipments.isLoading);
  const error = useSelector((state) => state.shipments.error);

  const handleShow = (orderNo) => {
    setShipment(shipments.find((shipment) => shipment.orderNo === orderNo));
    setShow(true);
  };

  const handleDelete = (orderNo) => {
    dispatch(
      setShipments(shipments.filter((shipment) => shipment.orderNo !== orderNo))
    );
  };

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  if (isLoading) {
    return 'loading...';
  }

  if (error) {
    return error;
  }

  // useEffect(() => {
  //   fetchShipments();
  // }, []);
  // const fetchShipments = async () => {
  //   // const data = await getShipments();
  //   const data = await getShipmentsData();
  //   setShipments(data);
  //   console.log(shipments);
  // };

  // const fetchShipments = async () => {
  //   try {
  //     const data = await getShipments();
  //     setShipments(data);
  //     console.log(shipments);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const saveChanges = () => {
    dispatch(
      setShipments(
        shipments.map((elem) =>
          elem.orderNo === shipment.orderNo ? shipment : elem
        )
      )
    );
  };

  return (
    <>
      <Table className="" striped size="sm">
        <thead className="table-secondary text-secondary text-uppercase  border border-1 border-primary lh-5">
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
        <tbody className="border border-1 border-primary align-middle">
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
                      variant="outline-primary m-1"
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
        shipment={shipment}
        setShipment={setShipment}
        saveChanges={saveChanges}
      />
    </>
  );
};

export default ShipmentTable;
