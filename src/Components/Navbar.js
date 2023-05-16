import { Link } from "react-router-dom"
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa"
import '../App.css'
import { useContext } from "react";
import CartContext from "./Contexts/CartContextProvider";


const Navbar = () => {
  const { cart } = useContext(CartContext)
  return (
    <div>
      <div className="alert" role="alert" style={alerta}>
        <strong>Envios</strong> sin cargo desde $50.000!
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div id='idNav' className="container-fluid" >
          <button id='buttonHome' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" id="buttonNav" aria-current="page" >Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/Productos" className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </Link>
                <ul id="menuProducts" className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Celulares</Link></li>
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Tablets</Link></li>
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Notebooks</Link></li>
                  <li><Link to="/Productos" id='productos' className="dropdown-item" >Perifericos</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Nosotros" id="buttonNav" className="nav-link active" >Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contacto" id="buttonNav" className="nav-link active" >Contacto</Link>
              </li>
            </ul>

            <li id="liCart" className="nav-item">
              <Link to="/Carrito" id="buttonCart" className="nav-link active" ><BsCart4 /><span className="badge text-bg-primary">{cart.length}</span></Link>
            </li>

            <li id="liMicuenta" className="nav-item dropdown"  >
              <div id="miCuenta" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaUserCircle />
              </div>
              <ul id='ulLog' className="dropdown-menu" aria-labelledby="navbarDropdown">
                <form className='formLog'>
                  <label className='label' for="usuario" >Usuario<input className='inputLog' id="usuario" type="text"></input></label>
                  <label className='label' for="password" >Contraseña<input className='inputLog' id="password" type="password"></input></label>
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
  backgroundColor: "#cee6fa",
  height: "40px",
  textAlign: "center",
  padding: "5px",
  fontSize: "20px"
}




