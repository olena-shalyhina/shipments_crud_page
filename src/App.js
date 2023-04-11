import './App.css';
import ShipmentTable from './components/ShipmentsTable';

function App() {
  return (
    <div className="App">
      <header className="text-center text-secondary text-uppercase fw-bold bg-light h5 m-2">
        Shipments CRUD page
      </header>
      <ShipmentTable />
    </div>
  );
}

export default App;
