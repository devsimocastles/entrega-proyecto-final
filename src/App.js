
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./sass/main.scss";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import VisualizadorProducto from './components/VisualizadorProducto';
import NoEncontrado from './components/NoEncontrado';

/*
  Requisitos de finalización
Apertura: Sunday, 27 de August de 2023, 00:00
Cierre: Friday, 8 de September de 2023, 23:59

Consigna:

Desarrollar un ecommerce en react o codeigniter con las siguientes paginas

  Home
    Mostrar un listado de productos
  Pagina detalle del producto
    Mostrar los datos mas destacados del producto
      Nombre
      Precio
      Stock
      Codigo
  Registro
    Formulario de registro con campos a criterio del estudiante
  Login
    Email
    Contraseña

*/


function App() {
  return (
    <div className="App">
      <Router>
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
