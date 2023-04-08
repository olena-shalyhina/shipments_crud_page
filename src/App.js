import './App.css';
import Container from 'react-bootstrap/Container';
import ShipmentTable from './components/ShipmentsTable';

function App() {
  return (
    <div className="App">
      <header className="text-center text-secondary text-uppercase h3 m-2">
        Shipments CRUD page
      </header>
      <ShipmentTable />
    </div>
  );
}

export default App;
