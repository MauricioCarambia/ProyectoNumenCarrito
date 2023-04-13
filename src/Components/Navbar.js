import { Link } from "react-router-dom"




const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home/inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Articulo #1</a></li>
                <li><a className="dropdown-item" href="#">Articulo #2</a></li>
                <li><a className="dropdown-item" href="#">Articulo #3</a></li>
                <li><a className="dropdown-item" href="#">Articulo #4</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contacto</a>
            </li>

          </ul>
          <div  >
            <li className="nav-item dropdown" style={navLog} >
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi cuenta
              </a>
              <ul style={ulLog} className="dropdown-menu" aria-labelledby="navbarDropdown">
                <label style={label} for="usuario" >Usuario<input style={inputLog} id="usuario" type="text"></input></label>
                <label style={label} for="password" >Contraseña<input style={inputLog} id="password" type="password"></input></label>
                <div style={divLog} >
                  <button style={buttonLog} >Ingresar</button>
                  <button style={buttonReg}>Registrate</button>
                </div>
              </ul>

            </li>
          </div>
        </div>
      </div>
    </nav>
=========
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" >Home/inicio</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/Productos" className="dropdown-item" >Celulares</Link></li>
                <li><Link to="/Productos" className="dropdown-item" >Tablets</Link></li>
                <li><Link to="/Productos" className="dropdown-item" >Notebooks</Link></li>
                <li><Link to="/Productos" className="dropdown-item" >Perifericos</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to="/Nosotros" id="buttonNav" className="nav-link active" >Nosotros</Link>
            </li>
            <li class="nav-item">
              <Link to="/Contacto" id="buttonNav" className="nav-link active" >Contacto</Link>
            </li>

          </ul>

          <li className="micuenta" class="nav-item dropdown" style={navLog} >
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mi cuenta
            </a>
            <ul style={ulLog} class="dropdown-menu" aria-labelledby="navbarDropdown">
              <form style={styleFormLog}>
                <label style={label} for="usuario" >Usuario<input style={inputLog} id="usuario" type="text"></input></label>
                <label style={label} for="password" >Contraseña<input style={inputLog} id="password" type="password"></input></label>
                <div style={divLog} >
                  <button className='buttonLog' style={buttonLog} >Ingresar</button>
                  <button className="buttonReg" style={buttonReg}>Registrate</button>

                </div>
              </form>
            </ul>

          </li>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

<<<<<<<<< Temporary merge branch 1
const inputLog = { width: "100%" }
const label = { color: "white" }
const navLog = { border: "solid 1px grey", padding: "10px 50px 10px 50px", display: "flex", flexWrap: "nowrap", justifyContent: "center", marginRight: "50px" }
const ulLog = { backgroundColor: "grey", width: "100%" }
const divLog = { display: "flex", flexDirection: "column" }
const buttonLog = { backgroundColor: "skyblue", width: "100px", margin: "10px auto 0px auto" }
const buttonReg = { color: "white", backgroundColor: "black", width: "100px", margin: "10px auto 0px auto" }
=========


const styleFormLog={display:"flex" , flexDirection:"column"}
const inputLog={width:"100%", margin:'auto' ,  }
const label= {color:"white"}
const navLog = {border:"solid 1px grey" , padding:"10px 50px 10px 50px", display:"flex",flexWrap:"nowrap", justifyContent:"center", marginRight:"50px"}
const ulLog ={ backgroundColor:"grey" , width:"100%" }
const divLog={display:"flex", flexDirection:"column"}
const buttonLog={ width:"100px", margin:"10px auto 0px auto" , border:"5px" , borderRadius:"50px", padding:"5px" }
const buttonReg={width:"100px", margin:"10px auto 0px auto",border:"5px" , borderRadius:"50px",padding:"5px"}

