import { createContext, useEffect, useReducer } from "react"
import { carritoInitialState, carritoReducer } from "../CarritoReducer";
import { TYPES } from "../actions";
import axios from "axios";


const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
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
        localStorage.setItem("localCart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (id) => { dispatch({ type: TYPES.ADD_TO_CART, payload: id }) };

    const deleteFromCart = (id, eliminarTodos) => {
        if (eliminarTodos) {
            dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id })
        }
        else {
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        };
    };

    const clearCart = () => { dispatch({ type: TYPES.CLEAR_CART }) };

    const data = {
        state,
        dispatch,
        addToCart,
        deleteFromCart,
        clearCart,
        useEffect,
        products,
        cart
    };

    return (

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContextProvider };
export default CartContext;
