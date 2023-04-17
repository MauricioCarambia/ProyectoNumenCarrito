import CardsListEmpleados from "../CardsListEmpleados"


const Nosotros = () => {
  return (
    <div className='contacto_titulo'>
            <h2>Empleados</h2>
    <CardsListEmpleados 
    data={empleados}
    />
    </div>
  )
}

export default Nosotros

const empleados=[
  {
    id:1,
    img:"https://w7.pngwing.com/pngs/456/422/png-transparent-cartoon-service-employees-and-work-permits-company-boy-fictional-character-thumbnail.png",
    alt:"sergio villagomez",
    nombre:"Sergio",
    apellido: "Villagomez",
    edad:22,
  },
  {
    id:2,
    img:"https://w7.pngwing.com/pngs/456/422/png-transparent-cartoon-service-employees-and-work-permits-company-boy-fictional-character-thumbnail.png",
    alt:"gonzalo segovia",
    nombre:"Gonzalo",
    apellido: "Segovia",
    edad:25,
  },
  {
    id:3,
    img:"https://w7.pngwing.com/pngs/456/422/png-transparent-cartoon-service-employees-and-work-permits-company-boy-fictional-character-thumbnail.png",
    alt:"manuel perez",
    nombre:"Manuel",
    apellido: "Perez",
    edad:28,
  },
  {
    id:4,
    img:"https://w7.pngwing.com/pngs/456/422/png-transparent-cartoon-service-employees-and-work-permits-company-boy-fictional-character-thumbnail.png",
    alt:"fabricio brizuela",
    nombre:"Fabricio",
    apellido: "Brizuela",
    edad:35,
  },
  {
    id:5,
    img:"https://w7.pngwing.com/pngs/456/422/png-transparent-cartoon-service-employees-and-work-permits-company-boy-fictional-character-thumbnail.png",
    alt:"facundo rodriguez",
    nombre:"Facundo",
    apellido: "Rodriguez",
    edad:25,
  },
  {
    id:6,
    img:"https://w7.pngwing.com/pngs/456/422/png-transparent-cartoon-service-employees-and-work-permits-company-boy-fictional-character-thumbnail.png",
    alt:"joaquin fernandez",
    nombre:"Joaquin",
    apellido: "Fernandez",
    edad:25,
  },
  
]