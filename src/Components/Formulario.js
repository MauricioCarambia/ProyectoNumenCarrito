import React from 'react'
import '../App.css'

const Formulario = () => {
    return (
        <div className='contacto_titulo'>
            <h2>Contactanos</h2>
            <div className='formulario'>
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                            <input type="text" class="form-control" placeholder="Nombre" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                            <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name" />
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deja un comentario..."></textarea>
                </div>
                <button type="submit" class="btn">Enviar</button>
            </div>
        </div>
    )
}

export default Formulario