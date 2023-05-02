import React, { useState, useEffect, useReducer } from 'react'
import { carritoInitialState, carritoReducer } from './CarritoReducer';
import CarritoProducto from './CarritoProducto';
import CarritoItems from './CarritoItems';
import { TYPES } from './actions';
import axios from 'axios';
import "../App.css"
const Cart = () => {

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
    const [Cart, setCart] = useState(setCart);
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
        let data = localStorage.getItem("cart")
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(Cart))
        console.log(Cart)
    }, [Cart])


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
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Articulo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                </table>
                {cart.map(item => {
                    return <CarritoItems key={item.id}
                        data={item} deleteFromCart={deleteFromCart} />
                })}
            </div>
            {/* <button style={boton} onClick={clearCart}>Limpiar Carrito</button> */}

            <button type="button" style={boton} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Eliminar todos
            </button>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminar articulos</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Desea eliminar todos los articulos del carrito de compras?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" onClick={clearCart} class="btn btn-primary">Sí</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

const card = {
    display: "flex",
    flexDirection: "row"
}
const boton = {
    backgroundColor: "red",
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "5px 10px",

}

