import React from "react";
import { SiMastercard, SiVisa, SiMercadopago, SiFacebook, SiInstagram, SiTiktok, SiHuawei, SiSamsung, SiApple, SiMotorola, SiDell} from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer>
            <section className="footer-top">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_HecsBLobicD-tu12336P3qI02WPIL2pkg&usqp=CAU" alt="logo"/>
                    <div>
                        <h4><Link to="/Productos">Productos</Link></h4>
                        <h4><Link to="/Nosotros">Nosotros</Link></h4>
                        <h4><Link to="/Contacto">Contacto</Link></h4>
                        <h4><Link to="/Contacto">Preguntas Frecuentes</Link></h4>
                        <h4><Link to="/Contacto">Terminos y condiciones</Link></h4>
                    </div>
                    <div>
                        <h4>Marcas</h4>
                        <div className="footer-icons">
                        <SiHuawei className="icons"/>
                        <SiSamsung className="icons"/>
                        <SiMotorola className="icons"/>
                        <SiApple className="icons"/>
                        <SiDell className="icons"/>
                        </div>
                    </div>
                    <div className="footer-top-payment-methods">
                        <div>
                            <h4>Medios de pago</h4>
                            <div className="footer-icons">
                                <SiMastercard/>
                                <SiVisa/>
                                <SiMercadopago/>
                            </div>
                        </div>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/" target="_blanck"><SiFacebook/></a>
                            <a href="https://www.instagram.com" target="_blanck"><SiInstagram/></a>
                            <a href="https://www.tiktok.com" target="_blanck"><SiTiktok/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="legal">
                    <span> © 2023 All rights reserved </span>
                    <p>License </p>
                </div>
            </section>
        </footer>
        </>
    )
}

export default Footer ;

