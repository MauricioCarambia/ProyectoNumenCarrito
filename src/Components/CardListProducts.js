import CardsProductos from './CardsProductos'





const CardListProducts = (props) => {
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


export default CardListProducts

const list = {
  display: "flex",
  margin: "20px 150px",
  padding: "20px 0px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around"
}