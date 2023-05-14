import { useContext } from "react";
import Carrusel from "../Carrusel"
import Productos from "./Productos"

import CarruselMediosDePago from "../CarruselMediosDePago";
import CarruselMarcas from "../CarruselMarcas";
import CartContext from "../Contexts/CartContextProvider";

const Inicio = () => {
  const { products } = useContext(CartContext)



  return (
    <div className='contacto_titulo' >
      <Carrusel />
      <h2>Productos destacados</h2>
      <div style={list}>
        <Productos
          data={products} />
      </div>
      <h2>Medios de pago</h2>
      <CarruselMediosDePago />
      <h2>Marcas que nos patrocinan</h2>
      <CarruselMarcas />
    </div>
  )
}

export default Inicio


const list = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
}
