
import { Link } from "react-router-dom"
import { BsCart4 } from "react-icons/bs";

import '../App.css'


const Navbar = () => {
  return (
    <div>
      <div class="alert" role="alert" style={alerta}>
        <strong>Envios</strong> sin cargo desde $50.000!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div id='idNav' class="container-fluid" >
          <button id='buttonHome' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" id="buttonNav" aria-current="page" >Inicio</Link>
              </li>
              <li class="nav-item dropdown">
                <Link to="/Productos" class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </Link>
                <ul id="menuProducts" className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Celulares</Link></li>
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Tablets</Link></li>
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Notebooks</Link></li>
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Perifericos</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/Nosotros" id="buttonNav" className="nav-link active" >Nosotros</Link>
              </li>
              <li class="nav-item">
                <Link to="/Contacto" id="buttonNav" className="nav-link active" >Contacto</Link>
              </li>
            </ul>
            <li class="nav-item">
              <Link to="/Carrito" id="buttonNav" className="nav-link active" ><BsCart4/></Link>
            </li>
            <li id="micuenta" class="nav-item dropdown"  >
              <a id="miCuenta" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi cuenta
              </a>
              <ul id='ulLog' class="dropdown-menu" aria-labelledby="navbarDropdown">
                <form className='formLog'>
                  <label className='label' for="usuario" >Usuario<input class='inputLog' id="usuario" type="text"></input></label>
                  <label className='label' for="password" >Contraseña<input class='inputLog' id="password" type="password"></input></label>
                  <div id='divLog' >
                    <button id='buttonLog'  >Ingresar</button>
                    <button id='buttonReg' >Registrate</button>
                    <div id='divCheckbox'>
                      <input type='checkbox'></input>
                      <label>Recordar usuario</label>
                    </div>
                  </div>
                </form>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar



const alerta = {
  backgroundColor:"#cee6fa",
  height: "40px",
  textAlign: "center",
  padding: "5px",
  fontSize: "20px"
}





