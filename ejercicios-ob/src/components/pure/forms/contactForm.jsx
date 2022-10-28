import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Contacto } from '../../../models/contact.class';

const ContactForm = ({add}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputNombre' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre del contacto'/>
                <input ref={apellidoRef} id='inputApellido' type='text' className='form-control form-control-lg' required placeholder='Apellido del contacto'/>
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email del contacto'/>

            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Agregar el contacto</button>
        </form>
    );
}

ContactForm.ProtoTypes = {
    add: PropTypes.func.isRequired
}    

export default ContactForm;
