import './App.css';
import Container from 'react-bootstrap/Container';
import ShipmentList from './components/ShipmentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header h1">Shipments CRUD page</header>
      <ShipmentList />
    </div>
  );
}

export default App;
