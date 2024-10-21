import React, { useEffect, useState } from "react";
import { Navigate,Link} from "react-router-dom";
import '../CSS/login.css';
import '../CSS/bootstrapCSS/bootstrap.css';
import axios from 'axios';

//Parte de arriba donde se coloca toda la lógica para cargar la información
function Login(){
    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);


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
    <div class="image">
        <div class="fondo">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <h1>Lista de compras</h1>
                    </div>

                    <div class="col-6">
                        <label>Ingresa nombre de usuario</label>
                        <br/>
                        <input 
                        type="text" 
                        placeholder="Nombre de usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <label>Ingrese su contraseña</label>
                        <input type="password" 
                        placeholder="Contraseña"
                        value={pass}
                        onChange={(e)=> setPass(e.target.value)}
                        />
                        <br/>
                        <div>
                            <button class="btn-blue" onClick={handleLogin}>Iniciar Sesión</button>
                        </div>
                        <div>
                            <br/>
                            <p>¿Aún no tienes tu cuenta?</p>
                            <button>
                                <Link to ="/registro" class="coustome-link">Registrate aquí</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {message && <p>{message}</p>}
        </div>
    </div>
    );
}

export default Login;