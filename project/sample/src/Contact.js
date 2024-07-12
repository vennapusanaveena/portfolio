import React from 'react'
import{FaSquareWhatsapp} from "react-icons/fa6";

import{FaLinkedin} from "react-icons/fa6";
const Contact = () => {
    return(
        <div>
            <h1>Contact Us:-</h1>
            <div className='dis'>
                <div className='center'>
                    <FaSquareWhatsapp className='Whatsapp'/>
                    <h3>+91 8317673862</h3>
                </div>
                <div className='center'>
                    <FaLinkedin className='Whatsapp'/>
                    <h3>Naveena</h3>
                </div>
            </div>
        </div>
    )
}
export default Contact;