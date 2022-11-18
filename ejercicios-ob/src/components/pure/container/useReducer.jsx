import React, { useReducer } from 'react';
import { Contacto } from '../../../models/contact.class';
import ContactComponent from '../contact';
import '../../../styles/contact.scss'
import ContactForm from '../forms/contactForm';

const ADD = 'ADD';
const DELETE = 'DELETE';

const defaultContact = new Contacto( 'Julián', 'León', 'Julianleon1202@gmail.com', true);
    const defaultContact1 = new Contacto( 'First', 'Contact', 'Firstcontact@gmail.com', false);
    const defaultContact2 = new Contacto('Second', 'Contact', 'Secondcontact@gmail.com', true);

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                nombre: '',
                apellido: '',
                email: '',
                conectado: true
            }
        case DELETE:
            return {
                ...state,
                nombre: '',
                apellido: '',
                email: '',
                conectado: true
                }    

        default:
            break;
    }
}

const UseReducer = () => {

    const [contacts, dispatch] = useReducer(reducer, [defaultContact, defaultContact1, defaultContact2]);

    function conexionContact(contact) {
        console.log('Complete this Contact', contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        //Se actualiza el estado del componente, por lo tanto, la tarea
        dispatch(tempContacts);
    }

    function deleteContact(contact){
        console.log('Delete this Contact', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        dispatch(tempContacts);
    }

    function addContact(contact){
        console.log('Delete this Contact', contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        dispatch(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Tus contactos:</h5>

                    </div>
                     <div className='card-body' data-mbd-perfect-scroll='true' style={ {position: 'relative', height:'300px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col' style={ {padding:'8px'}}>Nombre</th>
                                    <th scope='col' style={ {padding:'8px'}}>Apellido</th>
                                    <th scope='col' style={ {padding:'8px'}}>Email</th>
                                    <th scope='col' style={ {padding:'8px'}}>Estado de conexión</th>
                                </tr>
                            </thead>

                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                            <ContactComponent
                                                key={index}
                                                contact={contact}
                                                conexion={conexionContact}
                                                remove={deleteContact}    
                                                >
                                                
                                                    
                                            </ContactComponent>
                                        )
                                    } 
                                )}
                            </tbody>
                        </table>
                     </div>
                </div>

            </div>
                <ContactForm add={addContact}></ContactForm>
                
        </div>
    );
}

export default UseReducer;
