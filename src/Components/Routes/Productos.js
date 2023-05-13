import "../../App.css"
import { useContext } from "react";
import CardsProductos from "../CardsProductos";
import CartContext from "../Contexts/CartContextProvider";


const Productos = () => {

    const { products, cart, addToCart, deleteFromCart, clearCart } = useContext(CartContext)

    return (
        <section className='productList'>
            {
                <div style={card}>
                    {products.map(product => {
                        return <CardsProductos key={products.id}
                            data={product} addToCart={addToCart} />
                    })}
                </div>
            }
        </section>
    )
}

export default Productos

const card = {
    display: "flex",
    flexDirection: "row"
}
