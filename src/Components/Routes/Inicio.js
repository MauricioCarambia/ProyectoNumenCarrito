import CardListProducts from "../CardListProducts"


const Inicio = () => {
  return (
    <div>
      <p>Carusel</p>
      <h2>Productos destacados</h2>
      <CardListProducts
        data={products} />
      <p>Medios de pago</p>
      <p>Marcas que nos patrocinan</p>
      
    </div>
  )
}

export default Inicio


const products = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBFZGMmrfaEmiB_AX3vKfdozQJCIm3wor9w&usqp=CAU",
    titulo: "Motorola G9",
    precio: "$80000"
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRNmXnENOc58p4BFvUnpm4MqmKuhM75GpQg&usqp=CAU",
    titulo: "Iphone 12",
    precio: "$200000"
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-tr5LekIdymLQDB_90wWfIOfXdg7o_HQbLOVM-1eqdGn7fkHtCmy4Bjp34cr4M3aUCw&usqp=CAU",
    titulo: "Samsung S23",
    precio: "$150000"
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzy3f3U8OjJkrOdy54HpyOhI2I9yVa7vg6VA&usqp=CAU",
    titulo: "Nokia 1100",
    precio: "$1000000"
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TIGycPWJCXfY9MImJTDTYnhUHUQrZtX9966I3I5oVUq-9_-_K95d-9AnT7ZRAhWzZpc&usqp=CAU",
    titulo: "Xiaomi Redmi 10",
    precio: "$100000"
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m90PLbjdKRE4zIIDSBA8mpfeWXrAEwWqlw&usqp=CAU",
    titulo: "Motorola E20",
    precio: "$50000"
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgwVJQPltD-OsfSkXQyYmPCEIzGDj-0YPX1SSQqf8ECnpsKRmnN18rY9iR8wqQATzdBY&usqp=CAU",
    titulo: "Samsung Galaxy S6 Lite",
    precio: "$150000"
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5vnVgMfg-3nOgzSCuS3sWTW_WG2N9lUklBTBAQNfBydxW-JaFQKVh4becvNeMprZXTo&usqp=CAU",
    titulo: "Notebook Dell i5",
    precio: "$250000"
  }
]

