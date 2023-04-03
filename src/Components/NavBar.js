import React from "react";

const NavBar = () => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Productos
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Nosotros
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Contacto</a>
            </li>
        </ul>
    );
};

export default NavBar;
