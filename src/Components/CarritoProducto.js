import React from 'react'


const CarritoProducto = (props) => {
    const { data, addToCart } = props;
    return (
        <div>
            <figure style={cajacard}>
                <img style={imagen} src={data.img} alt={data.alt} />
                <figcaption style={textocard}>
                    <h3>{data.titulo}</h3>
                    <h4>{data.precio}</h4>
                </figcaption>
                <button style={boton} onClick={() => addToCart(data.id)}>Agregar al carrito</button>
            </figure>

        </div>
    )
}

export default CarritoProducto

const boton = {
    backgroundColor: "#006494",
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "5px 10px",

}
const cajacard = {
    height: "400px",
    borderRadius: "10px",
    width: "300px",
    padding: "0px 10px 20px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid black",
    background: "#cee6fa",
    boxShadow: "#006494 2px 2px 2px"
}

const imagen = {
    width: "297px",
    height: "245px",
    borderRadius: "10px",
    objectFit: "cover"
}

const textocard = {
    height: "100px",
    padding: "20px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}