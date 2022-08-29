
import './App.css';
import NavBar from './NavBar/NavBar'
import Presentaciones from './Presentaciones/Presentaciones'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <header className="App-header">
      <Presentaciones/>
    </header>
    </div>
  );
}

export default App;
