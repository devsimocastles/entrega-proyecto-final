
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./sass/main.scss";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import VisualizadorProducto from './components/VisualizadorProducto';
import NoEncontrado from './components/NoEncontrado';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/producto/:productoId" element={<VisualizadorProducto />} />
          <Route path='*' element={<NoEncontrado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
