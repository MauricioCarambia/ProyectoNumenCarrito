import React from 'react'
import FormContacto from '../FormContacto'

const Contacto = () => {
  return (
    <>
      <div className='container'>
        <div>
          <h1 className='mt-5 mb-5'>Contacto</h1>
          
          <p>Para contactarte con nuestro equipo de informes e inscripciones por favor utilizá el formulario o los teléfonos que se indican a continuación. Uno de nuestros asesores te contestará a la brevedad.</p>
        </div>
        <FormContacto></FormContacto>
      </div>
    </>
  )
}

export default Contacto;