import React from "react";
import '../CSS/listacompras.css';
import icono from '../CSS/images/list.png';
import '../CSS/bootstrapCSS/bootstrap.css';
import nintendo from '../CSS/images/NintendoSwitch.png';
import play from '../CSS/images/play5.png';
import carrito from '../CSS/images/carrito.png';


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

        <div className="row">
            <h1>Shopping List</h1>
            <div className="container-lista col-5">
                <h3>Tenemos para ti las mejores promociones en todas las consolas</h3>
                <div className="container-images col-6">
                    <img src={nintendo} alt="Nintendo Switch" height={100} width={200}/>
                    <img src={play} alt="Playstation 5" height={200} width={200}/>
                </div>
            </div>
            <div className="container-lista col-5">
                <h3>Si creas tu cuenta con nosotros, tendrás un descuento adicional en el envio</h3>
                <div>
                    <img src={carrito} alt="Ejemplo de carrito" height={100} width={100}/>
                </div>
            </div>
        </div>

        <footer>
            <p>Proyecto de programación web 2</p>
        </footer>
        </>
    );
}

export default ListaCompras;
