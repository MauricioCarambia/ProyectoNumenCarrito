import React from 'react'


const CarritoItems = (props) => {

    const { data, deleteFromCart } = props;

    return (
        <div>
            {/* <h3>{data.titulo}</h3>
            <h4>${data.precio}</h4>
            <h5>Cantidad: {data.cantidad} unidades</h5>
            <h5>Subtotal: ${data.precio * data.cantidad}</h5>
            <button style={boton} onClick={() => deleteFromCart(data.id, false)}>Eliminar un producto</button>
            <button style={boton} onClick={() => deleteFromCart(data.id, true)}>Eliminar todos</button>
 */}
            <table class="table">
                <tbody>
                    <tr >
                        <th scope="row">{data.titulo}</th>
                        <td>{data.precio}</td>
                        <td>{data.cantidad} unidades</td>
                        <td>${data.precio * data.cantidad}</td>
                        <td>  <button style={boton} onClick={() => deleteFromCart(data.id, false)}>Eliminar un producto</button>
                            <button style={boton} onClick={() => deleteFromCart(data.id, true)}>Eliminar todos</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CarritoItems

const boton = {
    backgroundColor: "red",
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "5px 10px",

}
