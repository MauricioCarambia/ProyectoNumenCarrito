import React from 'react'
import Img1 from "../Imagenes-carruse-medios-de-pago/ahora12-destacado_web.jpg"
import Img2 from "../Imagenes-carruse-medios-de-pago/cuanto-tarda-una-transferencia-bancaria-argentina-1024x585.jpg"
import Img3 from "../Imagenes-carruse-medios-de-pago/logo-mercadopago.jpg"
import Carousel from 'react-bootstrap/Carousel';
import "../App.css"


function CarruselMediosDePago() {
  return (
    <Carousel id="carr2" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption id="carrCaption2">
          <div id="divCaption2"><h5 >Ahora 12</h5>
          <p>Conoce los planes hasta 12 cuotas</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
        <Carousel.Caption id="carrCaption2">
          <div id="divCaption2">
          <h5>Transferencia</h5>
          <p>Conoce los descuentos por pagar via CBU / ALIAS</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
        <Carousel.Caption id="carrCaption2">
          <div id="divCaption2">
          <h5>Mercado Pago</h5>
          <p>
           Conoce los beneficios que te ofrece Mercado Pago
          </p></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselMediosDePago;


