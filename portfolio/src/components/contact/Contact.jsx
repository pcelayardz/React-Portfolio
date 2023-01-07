import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b48bosc', 'template_mm3ussg', form.current, '7qJ5K-KTP34Q49p__')
            .then((result) => {
                console.log(result.text);
                alert("Message send");
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5 id='get'>Get in touch</h5>
            <h2 id='contactme'>Contact Me</h2>
            <div className='container container__contact'>
                {/* <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5></h5>
                        <a href='' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Perla Celaya</h5>
                        <a href='' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <a href='' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div> */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Full name' required />
                    <input type='email' name='email' placeholder='Your email' required />
                    <textarea name='message' rows='7' placeholder='Yout message' required></textarea>
                    <button type='submit' className='btn btn-primary btn-center'>Send message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
