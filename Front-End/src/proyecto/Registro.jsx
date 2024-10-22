import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import '../CSS/bootstrapCSS/bootstrap.css';
import '../CSS/registro.css';
import icono from '../CSS/images/list.png';
import axios from "axios";

function Registro(){
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [registroExitoso, setRegistroExitoso] = useState(false);

    const sendDatos = () =>{
        //Validaciones

        axios.post("http://localhost:3000/Lista",{
            usuario: usuario,
            email: email,
            pass: pass,
        }).then(() =>{
            setMessage("Registro completado");
            setRegistroExitoso(true); //Cambio estado a true cuando el registro está realizado
        });
    }

    //Componente de registro exitoso
    const RegistroExitosoComponent = () =>(
        <div className="">
            <h2>Registro completo</h2>
            <p>Favor de completa la información adicional:</p>
            <Link to={`/informacion-adicional/${email}`} className="">Continuar</Link>
        </div>
    );

    return(
        //Primera división para colocar la imagen del proyecto
        <div class="fondo">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div>
                            <h1>Shopping List</h1>
                            <img src={icono} alt="icono" height={200} width={200}/>
                        </div>
                    </div>

                    <>
                    <div class="col-6">
                        <h2>Crea un usuario</h2>
                        <label>Ingrese nombre de usuario:</label>
                        <input type="text" placeholder="Nombre de usuario" 
                        onChange={(e) =>{setUsuario(e.target.value)}}/>
                        <br/>
                        <br/>
                        <label>Ingrese su correo electrónico:</label>
                        <input type="email" placeholder="Correo electrónico"
                        onChange={(e) =>{setEmail(e.target.value)}}/>
                        <br/>
                        <br/>
                        <label>Ingrese una contraseña:</label>
                        <input type="password" placeholder="Contraseña"
                        onChange={(e)=>{setPass(e.target.value)}}/>
                        <br/>
                        <br/>
                        <div>
                            <button onClick={sendDatos}>Registrar</button>
                        </div>
                        <br/>
                        <button>
                            <Link to="/Login" class="coustome-link">¿Ya tienes cuenta? Iniciar sesión</Link>
                        </button>
                    </div>
                    {message && <p>{message}</p>}
                    </>
                </div>
            </div>
        </div>
    );
}

export default Registro;