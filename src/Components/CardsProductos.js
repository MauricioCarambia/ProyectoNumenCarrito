import React from 'react'

<<<<<<< Updated upstream
const CardsProductos = () => {
  return (
    <div>CardsProductos</div>
  )
}

export default CardsProductos
=======


const CardsProductos = (props) => {
    return (
        <figure style={cajacard}>
            <img style={imagen} src={props.card.img} alt="" />
            <figcaption style={textocard}>
                <h3>{props.card.titulo}</h3>
                <p>{props.card.precio}</p>
            </figcaption>
            <Button />
        </figure>
    )
}

export default CardsProductos

const cajacard = {
    height: "500px",
    borderRadius: "3px",
    width: "300px",
    padding: "0px 10px 20px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid royalblue",
}

const imagen = {
    width: "298px",
    height: "300px",
    borderRadius: "3px",
    objectFit: "cover"
}

const textocard = {
    height: "200px",
    padding: "20px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

>>>>>>> Stashed changes
