import React, { useEffect, useReducer } from 'react'
import { carritoInitialState, carritoReducer } from './CarritoReducer';
import CarritoProducto from './CarritoProducto';
import CarritoItems from './CarritoItems';
import { TYPES } from './actions';
import axios from 'axios';

const Cart = () => {

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

    }, [])


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

    return (
        <div>
            <h1>Carrito de compras</h1>
            <h2>Productos</h2>
            <div style={card}>
                {products.map(product => {
                    return <CarritoProducto key={product.id}
                        data={product} addToCart={addToCart} />
                })}
            </div>
            <h2>Carrito</h2>
            <div >
                {cart.map(item => {
                    return <CarritoItems key={item.id}
                        data={item} deleteFromCart={deleteFromCart} />
                })}
            </div>
            <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
    )
}

export default Cart

const card = {
    display: "flex",
    flexDirection: "row"

}

