import React from 'react';
import { Container } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container className="d-flex h-25 justify-content-center align-items-center border border-primary border-2 rounded mt-5 bg-light">
      <Spinner
        className="m-2"
        animation="border"
        variant="secondary"
        size="md"
      />
      <p className="text-secondary text-uppercase m-2">
        Please wait, data is loading ...
      </p>
    </Container>
  );
};

export default Loader;
