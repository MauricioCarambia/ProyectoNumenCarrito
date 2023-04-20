import CardsProductos from './CardsProductos'
import '../App.css'




const CardListProducts = (props) => {
  return (
    <section className='productList'>
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

