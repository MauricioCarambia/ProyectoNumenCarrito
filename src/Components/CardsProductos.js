import { useContext } from "react"
import CartContext from "./Contexts/CartContextProvider"

const CardsProductos = (props) => {
    const { data } = props;
    const { addToCart } = useContext(CartContext)
    return (
        <figure style={cajacard}>
            <img style={imagen} src={data.img} alt={data.alt} />
            <figcaption style={textocard}>
                <h3>{data.titulo}</h3>
                <p>{data.precio}</p>
            </figcaption>
            {/* <button style={boton} onClick={() => addToCart(data.id)}>Agregar al carrito</button> */}


            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={boton} onClick={() => addToCart(data.id)}>
                Agregar al carrito
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar al carrito</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Desea agregar el producto al carrito?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    )
}

export default CardsProductos

const cajacard = {
    height: "400px",
    borderRadius: "10px",
    width: "300px",
    padding: "0px 10px 20px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid black",
    background: "#cee6fa",
    boxShadow: "#006494 2px 2px 2px"
}

const imagen = {
    width: "297px",
    height: "245px",
    borderRadius: "10px",
    objectFit: "cover"
}

const textocard = {
    height: "100px",
    padding: "20px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}
const boton = {
    backgroundColor: "#006494",
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "5px 10px",

}