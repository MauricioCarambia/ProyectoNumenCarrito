import React from 'react'

const CarritoItems = (props) => {

    const { data, deleteFromCart } = props;

    return (
        <div style={carri}>
            <h3>{data.titulo}</h3>
            <h4>${data.precio}</h4>
            <h5>Cantidad: {data.cantidad} unidades</h5>
            <h5>Subtotal: ${data.precio * data.cantidad}</h5>
            <button onClick={() => deleteFromCart(data.id, false)}>Eliminar un producto</button>
            <button onClick={() => deleteFromCart(data.id, true)}>Eliminar todos</button>

        </div>
    )
}

export default CarritoItems


const carri = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
}