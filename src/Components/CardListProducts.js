import React from 'react'
import CardsProductos from './CardsProductos'




const CardList = (props) => {
  return (
    <section style={list}>
      {
        props.data.map(card => <CardsProductos
          key={card.id}
          card={card} />
        )
      }
    </section>
  )
}

export default CardList

const list = {
  display: "flex",
  margin: "100px",
  padding: "20px 100px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around"
}