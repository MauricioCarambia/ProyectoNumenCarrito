

const Preguntas = () => {
    return (
        <div className='contacto_titulo'>
            <h2>Preguntas Frecuentes</h2>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Metodos de pago
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Actualmente contamos con los siguientes medios de pago
                                (solo se acepta un medio de pago por pedido):
                                <ul>
                                    <li>Deposito Bancario o Transferencia</li>
                                    <li>Tarjeta de Credito</li>
                                    <li>Mercadopago</li>
                                </ul> </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Formas de envio
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                UPS a Todo el Pais :
                                • Envíos puerta a puerta. Brindado la seguridad de una empresa de primer nivel.
                                <br></br>
                                Retiro en CABA :
                                • Podra retirar en un punto de retiro en Capital Federal una vez le llegue la factura de compra a su mail. Solo puede retirarlo el Titular de la Cuenta o Tarjeta
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Devoluciones
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Si solicitaste la devolución de un producto, tené en cuenta que los tiempos de acreditación pueden demorar entre 72 hs hábiles hasta 10 días corridos, dependiendo la tarjeta que hayas utilizado y contemplando el cierre de tu resumen de cuenta. La devolución en tu resumen aparecerá con el importe en negativo y en la misma cantidad de cuotas en la que realizaste la compra, es decir, si compraste en 12 cuotas la devolución será en 12 cuotas.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Problemas con mi cuenta
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Si te olvidaste tu contraseña o si te registraste mediante Facebook o Email, deberas acceder a la seccion de inicio de sesion y pulsar en la opcion "Olvide mi Clave".<br></br>
                                Alli debera colocar el email que utiliza para iniciar sesion y al mismo le llegara la clave correspondiente a su usuario luego de pulsar en el boton "Recuperar Clave".
                                Si sigues presentando problemas, te recomendamos:<ul>
                                    <li>Habilitar los Cookies.</li>
                                    <li>Habilitar el soporte para Javascript.</li>
                                    <li>Refrescar la Pagina.</li>
                                </ul></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Preguntas