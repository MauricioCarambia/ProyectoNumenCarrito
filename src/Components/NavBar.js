import React from "react";

const NavBar = () => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxvXarDEKq6q0KAVQNi_vq5K3fKG23aGTYA&usqp=CAU" alt="logo" width="100px"/>
            <p>Empresa</p>
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
        </div>
    );
};

export default NavBar;
