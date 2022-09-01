
import './App.css';
import NavBar from './NavBar/NavBar'
import Presentaciones from './Presentaciones/Presentaciones'
import Nosotros from './Nosotros/Nosotros'
import Home from './Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Nosotros />
      <Presentaciones/>
    </div>
  );
}

export default App;
