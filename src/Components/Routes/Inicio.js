import { useEffect, useReducer } from "react";
import Carrusel from "../Carrusel"
import Productos from "./Productos"
import { carritoInitialState, carritoReducer } from "../CarritoReducer";
import { TYPES } from "../actions";
import axios from "axios";

const Inicio = () => {

  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  // const [Cart, setCart] = useState();
  const { products } = state;

  const updateState = async () => {
    const ENDPOINT = {
      productsList: "http://localhost:5000/products",
      cartList: "http://localhost:5000/cart"
    }
    const resProducts = await axios.get(ENDPOINT.productsList);
    const resCart = await axios.get(ENDPOINT.cartList);
    const productsList = await resProducts.data;
    const cartList = await resCart.data;

    dispatch({
      type: TYPES.READ_STATE, payload: {
        products: productsList,
        cart: cartList
      }
    })
  }


  useEffect(() => {
    updateState()

  }, [])

  // const addToCart = (id) => { dispatch({ type: TYPES.ADD_TO_CART, payload: id }) };


  return (
    <div className='contacto_titulo' >
      <Carrusel />
      <h2>Productos destacados</h2>
      <div style={list}>
        <Productos
          data={products} />
      </div>
      <p>Medios de pago</p>
      <p>Marcas que nos patrocinan</p>
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
