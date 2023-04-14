import Cardsempleados from "./CardsEmpleados"



const CardsListEmpleados = (props) => {
  return (
    <section style={{
      display: "flex",
      margin: "20px 100px",
      padding: "20px 150px",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }}>
      {
        props.data.map(card => <Cardsempleados
          key={card.id}
          card={card}
        />)
      }
    </section>
  )
}

export default CardsListEmpleados