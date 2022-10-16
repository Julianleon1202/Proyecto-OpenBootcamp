import React from 'react';
import { Contacto } from '../../../models/contact.class';
import ContactComponent from '../contact';


const ListContactComponent = () => {

    const defaultcontact = new Contacto( 'Julián', 'León', 'Julianleon1202@gmail.com', true);


    return (
        <div>
            <div>
                <h2>Las características del contacto son:</h2>
            </div>
            <ContactComponent contact={defaultcontact}></ContactComponent>
        </div>
    );
};


export default ListContactComponent;
