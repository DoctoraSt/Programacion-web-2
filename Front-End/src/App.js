import React from "react";
import Registro from "./Registro";
import Login from "/Login";
import ListaCompras from './proyecto/ListaCompras';

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
