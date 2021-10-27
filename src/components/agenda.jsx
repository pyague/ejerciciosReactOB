import React from 'react';
import Contactcomponent from './pure/contactComponent';
import { Contact } from '../models/contact';

const Agenda = () => {
    
    const defaultContact = new Contact('Pablo', 'Yagüe González', 'pablo@gmail.com', false)
    
    return (
        <div>
            <Contactcomponent contact={defaultContact}></Contactcomponent>
        </div>
    );
};



export default Agenda;

