import Cardsempleados from "./CardsEmpleados"
import "../App.css"


const CardsListEmpleados = (props) => {
  return (
    <section className="listEmpleados">
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