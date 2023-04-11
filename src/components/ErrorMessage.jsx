import React from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorMessage = ({ error }) => {
  return (
    <>
      {
        <Alert className="m-5 text-center" variant="danger">
          {error}
        </Alert>
      }
    </>
  );
};

export default ErrorMessage;
