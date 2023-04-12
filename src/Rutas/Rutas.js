
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Inicio from "../Components/Routes/Inicio";
import Productos from "../Components/Routes/Productos";
import Nosotros from "../Components/Routes/Nosotros";
import Contacto from "../Components/Routes/Contacto";
import Footer from "../Components/Footer";


const Rutas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Productos" element={<Productos />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/Contacto" element={<Contacto />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Rutas