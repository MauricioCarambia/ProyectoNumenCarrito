import CardListProducts from "../CardListProducts"


const Inicio = () => {
  return (
    <div className='contacto_titulo' >
      <p>Carusel</p>     
        <h2>Productos destacados</h2>
        <div style={list}>
        <CardListProducts
          data={products} />
      </div>
      <p>Medios de pago</p>
      <p>Marcas que nos patrocinan</p>
    </div>
  )
}

export default Inicio


const list = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
}

const products = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBFZGMmrfaEmiB_AX3vKfdozQJCIm3wor9w&usqp=CAU",
    alt: "Motorola G9",
    titulo: "Motorola G9",
    precio: "$80000"
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRNmXnENOc58p4BFvUnpm4MqmKuhM75GpQg&usqp=CAU",
    alt: "Iphone 12",
    titulo: "Iphone 12",
    precio: "$200000"
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-tr5LekIdymLQDB_90wWfIOfXdg7o_HQbLOVM-1eqdGn7fkHtCmy4Bjp34cr4M3aUCw&usqp=CAU",
    alt: "Samsung S23",
    titulo: "Samsung S23",
    precio: "$150000"
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzy3f3U8OjJkrOdy54HpyOhI2I9yVa7vg6VA&usqp=CAU",
    alt: "Nokia 1100",
    titulo: "Nokia 1100",
    precio: "$1000000"
  }
]

