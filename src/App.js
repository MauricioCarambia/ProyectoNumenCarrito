
import CardListProducts from "./Components/CardListProducts";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <CardListProducts 
      data={products}/>
    </>
  );
}

export default App;


const products = [
  {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0LuSPngV5nV8oi-_aldtcFcPsTjAgxGSqg&usqp=CAU",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTtMVtxouVi92Y3zjovfQvX0Y_TffsgJv8Nx-tUy9QR1s8kwUPHAcmTGI7VsfeWblLak&usqp=CAU",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jyRhddqUug7_b3QFktKoAYn1i4GNcqC5qyZyAkEpuzHMzIktA3EE1zuhObPp66VitxA&usqp=CAU",
      titulo: "Tablet Samsung Galaxy S6 Lite",
      precio: "$150000"
  },
  {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5vnVgMfg-3nOgzSCuS3sWTW_WG2N9lUklBTBAQNfBydxW-JaFQKVh4becvNeMprZXTo&usqp=CAU",
      titulo: "Notebook Dell",
      precio: "$250000"
  }
]