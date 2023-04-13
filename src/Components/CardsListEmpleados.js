import Cardsempleados from "./CardsEmpleados"



const CardsListEmpleados = (props) => {
  return (
    <section style={{
      display:"flex",
      justifyContent:"space-around",
      flexWrap:"wrap",
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