import React, { useContext } from 'react'
import CarritoItems from '../CarritoItems';
import "../../App.css"
import CartContext from '../Contexts/CartContextProvider';
import CarritoProducto from '../CarritoProducto';

const Carrito = () => {
  const { products, cart, addToCart, deleteFromCart, clearCart } = useContext(CartContext)

  return (
    <div>
      <h1>Carrito de compras</h1>
      <h2>Productos</h2>
      <div style={card}>
        {products.map(product => {
          return <CarritoProducto key={products.id}
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
          return <CarritoItems key={products.id}
            data={item} deleteFromCart={deleteFromCart} />
        })}
      </div>

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

export default Carrito

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

