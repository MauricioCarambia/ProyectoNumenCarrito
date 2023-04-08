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