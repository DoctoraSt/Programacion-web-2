import React, { useEffect, useState } from "react";
import '../CSS/login.css';
import axios from 'axios';

//Parte de arriba donde se coloca toda la lógica para cargar la información
function Login(){
    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        localStorage.removeItem('sesion');
    }, []);

    const handleLogin = () =>{
        if(!usuario || !pass){
            setMessage("Favor de completar los campos");
            return;
        } else{
            axios.post("http://localhost:3000/login", {usuario: usuario, pass: pass})
            .then((data) => {
                setMessage(data.data.message);
                if(data.data.sucess){
                    localStorage.setItem('sesion', JSON.stringify(data.data.usuario));
                    console.log(data.data);
                    setLoggedIn(true);
                }
            })
            .catch((error)=> {
                setMessage("Error al iniciar sesión");
            });
        }
    };

    if(loggedIn){
        return <Navigate to = "./ListaCompras" />;
    }

    return(
        <div>
            <div>
                <h1>No sé como llamar a la app</h1>
            </div>

            <input 
            type="text" 
            placeholder="Nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            />

            <input type="password" 
            placeholder="Contraseña"
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
            />

            <div>
                <button onClick={handleLogin}>Iniciar Sesión</button>
            </div>

            <div>
                <p>¿Aún no cuentas con tu cuenta?</p>
                <Liink to ="./Registro">Registrate aquí</Liink>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;