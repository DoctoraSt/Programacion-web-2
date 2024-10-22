import React from "react";
import Registro from "./proyecto/Registro";
import Login from "./proyecto/Login";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCompras from "./proyecto/ListaCompras";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rutas con nombres más sencillos */}
        <Route path="/registro" element={<Registro/>} />
        <Route path="/login" element={<Login />} />

        {/* Si agregas más rutas, por ejemplo ListaCompras */}
        <Route path="/lista-compras" element={<ListaCompras />} />

        {/* Ruta por defecto para manejar 404 (opcional) */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

