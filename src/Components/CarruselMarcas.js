import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../Imagenes-marcas/Dell_Logo.png";
import Img2 from "../Imagenes-marcas/Lenovo_Global_Corporate_Logo.png";
import Img3 from "../Imagenes-marcas/Motorola_logo.svg.png";
import Img4 from "../Imagenes-marcas/Samsung_Logo.svg.webp";
import Img5 from "../Imagenes-marcas/logo_2003.jpg";
import "../App.css"
function CarruselMarcas() {
  return (
    <Carousel id="carr2" variant="dark">
      <Carousel.Item>
        <img id="imgMarca"
          className="d-block w-100"
          src={Img2}
          alt="First slide"
        />
        <Carousel.Caption>
        <div id="divCaption2"><h5>Lenovo</h5></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="imgMarca"
          className="d-block w-100"
          src={Img3}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div id="divCaption2"><h5>Motorola</h5></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="imgMarca"
          className="d-block w-100"
          src={Img5}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div id="divCaption2"><h5>Apple</h5></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="imgMarca"
          className="d-block w-100"
          src={Img1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div id="divCaption2"><h5>Dell</h5></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="imgMarca"
          className="d-block w-100"
          src={Img4}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div id="divCaption2"><h5>Samsung</h5></div>
          
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarruselMarcas;