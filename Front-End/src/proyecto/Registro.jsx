import React, { useState } from "react";
import '../CSS/registro.css';
import axios from 'axios';

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
            <div>
                <div>

                </div>
            </div>

            <>
            <input type="text" placeholder="Nombre de usuario" 
            onChange={(e) =>{setUsuario(e.target.value)}}/>

            <input type="email" placeholder="Correo electrónico"
            onChange={(e) =>{setEmail(e.target.value)}}/>

            <input type="password" placeholder="Contraseña"
            onChange={(e)=>{setPass(e.target.value)}}/>

            <div>
                <button onClick={sendDatos}>Registrar</button>
            </div>
            <div class="button-inicio">
                <p>¿Ya tienes tu cuenta?</p>
                <Link to="./Login"></Link>
            </div>
            {message && <p>{message}</p>}
            </>
        </div>
    );
}

export default Registro;