
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


import Inicio from './routes/Inicio'

import AdminInicio from './routes/Admin/Inicio'
import AdminCategorias from "./routes/Admin/Categorias";
import AdminAgregarProducto from "./routes/Admin/AgregarProducto";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Inicio/>} />


            <Route path="/admin" element={<AdminInicio/>} />
            <Route path="/admin/categorias" element={<AdminCategorias/>} />
            <Route path="/admin/agregarproducto" element={<AdminAgregarProducto/>} />
        </Routes>
    </Router>
  );
}

export default App;
