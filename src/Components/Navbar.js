


import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home/inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Articulo #1</a></li>
            <li><a class="dropdown-item" href="#">Articulo #2</a></li>
            <li><a class="dropdown-item" href="#">Articulo #3</a></li>
            <li><a class="dropdown-item" href="#">Articulo #4</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contacto</a>
        </li>
        
      </ul>
      
      <li class="nav-item dropdown" style={navLog} >
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Mi cuenta
          </a>
          <ul style={ulLog} class="dropdown-menu" aria-labelledby="navbarDropdown">
            <form style={styleFormLog}>
          <label style={label} for="usuario" >Usuario<input style={inputLog} id="usuario" type="text"></input></label>
          <label style={label} for="password" >Contraseña<input style={inputLog}  id="password" type="password"></input></label>
          <div style={divLog} >
          <button style={buttonLog} >Ingresar</button>
          <button style={buttonReg}>Registrate</button>
          
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



const styleFormLog={display:"flex" , flexDirection:"column"}
const inputLog={width:"100%", margin:'auto' ,  }
const label= {color:"white"}
const navLog = {border:"solid 1px grey" , padding:"10px 50px 10px 50px", display:"flex",flexWrap:"nowrap", justifyContent:"center", marginRight:"50px"}
const ulLog ={ backgroundColor:"grey" , width:"100%" }
const divLog={display:"flex", flexDirection:"column"}
const buttonLog={ backgroundColor:"skyblue", width:"100px", margin:"10px auto 0px auto" , border:"5px" , borderRadius:"50px", padding:"5px" }
const buttonReg={color:"white",backgroundColor:"black",width:"100px", margin:"10px auto 0px auto",border:"5px" , borderRadius:"50px",padding:"5px"}