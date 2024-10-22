import React from "react";
import { Navigate,Link} from "react-router-dom";
import '../CSS/login.css';
import icono from '../CSS/images/list.png';
import '../CSS/bootstrapCSS/bootstrap.css';

function ListaCompras(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <img src={icono} alt="icono"  height={50} width={50}/>
            <a class="navbar-brand" href="#">Shopping List</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mi perfil
                    </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Información personal</a></li>
                <li><a class="dropdown-item" href="#">Tarjetas</a></li>
                <li><a class="dropdown-item" href="#">Direcciones</a></li>
                <li><a class="dropdown-item" href="#">Comunicación</a></li>
            </ul>
        </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Lo más vendido</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Promociones</a>
                </li>
        </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-secondary" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
    );
}

export default ListaCompras;