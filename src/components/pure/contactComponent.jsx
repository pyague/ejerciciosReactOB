import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const Contactcomponent = ({contact}) => {
    
    const [online, setOnline] = useState(contact.conected)

    const change = () =>{
        if (online == true){
            setOnline(false)
        }else{
            setOnline(true)
        }
    }

    return (
        <div>
            <h1>
                Nombre: {contact.name}
            </h1>
            <h2>
                Apellido: {contact.surname}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h5>
                Conectado: {online ? 'CONTACTO EN LÍNEA' : 'CONTACTO NO DISPONIBLE'}
                <button onClick={change}>Change</button>
            </h5>
        </div>
    );
};


Contactcomponent.propTypes = {
    contact: PropTypes.instanceOf(Contact) 
};


export default Contactcomponent;
