import React from "react";
import { Navigate, Link } from "react-router-dom";
import '../CSS/login.css';
import icono from '../CSS/images/list.png';
import '../CSS/bootstrapCSS/bootstrap.css';

function ListaCompras() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={icono} alt="icono" height={50} width={50} />
                <a className="navbar-brand" href="#">Shopping List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mi perfil
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Información personal</a></li>
                                <li><a className="dropdown-item" href="#">Tarjetas</a></li>
                                <li><a className="dropdown-item" href="#">Direcciones</a></li>
                                <li><a className="dropdown-item" href="#">Comunicación</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Lo más vendido</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promociones</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <section>
            {/* Agrega contenido aquí */}
        </section>
        </>
    );
}

export default ListaCompras;
