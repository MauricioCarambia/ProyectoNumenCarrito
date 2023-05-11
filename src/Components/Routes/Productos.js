import { useEffect, useReducer } from "react";
import { carritoInitialState, carritoReducer } from "../CarritoReducer";
import CardsProductos from "../CardsProductos";
import { TYPES } from "../actions";
import axios from "axios";

const Productos = () => {
    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
    // const [Cart, setCart] = useState();
    const { products, cart } = state;

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

    const addToCart = (id) => { dispatch({ type: TYPES.ADD_TO_CART, payload: id }) };

    return (
        <section className='productList'>
            {
                products.map(card => <CardsProductos
                    key={card.id}
                    card={card} />
                )
            }
        </section>
    )
}

export default Productos
