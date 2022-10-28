import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';
import '../../styles/contact.scss'


const ContactComponent = ({ contact, conexion, remove }) =>  {

    useEffect(() => {
        console.log('Contacto creado')
        return () => {
            console.log(`Contacto: ${contact.nombre} va a ser desmontada`)
        };
    }, [contact]);

    function contactIconConected(){
        if(contact.conected){
            return (<i onClick={()=>conexion(contact)} className='bi-toggle-on contact-action' style={{color:'green'}}></i>) 
        }

        else{
            return (<i onClick={()=>conexion(contact)} className='bi-toggle-off contact-action' style={{color:'grey'}}></i>)
        }
    }



    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.nombre}</span>
            </th>

            <td className='alig-midle'>
                <span>{contact.apellido}</span>
            </td>

            <td className='alig-midle'>
                <span>{contact.email}</span>
            </td>

            <td className='alig-midle'>

                {contactIconConected()}

                <i onClick={() => remove(contact) } className='bi-trash contact-action' style={{color:'purple'}}></i>

            </td>

        </tr>

    );
};


ContactComponent.propTypes = {
    contacto :PropTypes.instanceOf(Contacto).isRequired,
    conexion: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
