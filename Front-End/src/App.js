import React from "react";
import Registro from "./proyecto/Registro";
import Login from "./proyecto/Login";
import { Navigate} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCompras from "./proyecto/ListaCompras";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to ="/Login"/>} />
      <Route path="/Registro de usuario" element={<Registro/>}/>
      <Route path="/Pagina principal" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
