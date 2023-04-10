import './App.css';
import Container from 'react-bootstrap/Container';
import ShipmentTable from './components/ShipmentsTable';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <header className="text-center text-secondary text-uppercase h3 m-2">
          Shipments CRUD page
        </header>
        <ShipmentTable />
      </Container>
    </div>
  );
}

export default App;
