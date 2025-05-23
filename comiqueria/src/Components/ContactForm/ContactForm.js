import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <h2>Contacto</h2>
            <form>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;