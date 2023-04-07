import React from 'react'
import Button from './Button'



const CardsProductos = (props) => {
    return (
        <figure style={card}>
            <img style={imagen} src={props.card.img} alt="" />
            <figcaption style={figcaption}>
                <h3>{props.card.titulo}</h3>
                <p>{props.card.precio}</p>
            </figcaption>
            <Button />
        </figure>
    )
}

export default CardsProductos

const card = {
    heigth: "600px",
    border: "2px solid royalblue",
    borderRadius: "3px",
    width: "300px",
    padding: "30px",
    margin:"20px",
    display: "flex",
    flexDirection: "column"
}

const imagen={
    width:"200px",
    heigth:"300px"
}

const figcaption={
    padding:"20px 0px",
    display:"flex",
    flexDirection:"column",
    alignItem:"center",
    justifyContent:"center"
}   

