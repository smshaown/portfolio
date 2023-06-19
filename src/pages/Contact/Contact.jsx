import React from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebook, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section__title'>Get In <span>Touch</span></h2>


      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className='contact__title'>Don't be Shy !</h3>

          <p className="contact__description">
            Feel Free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>S M Shaown</span>
                <span className="info__des">smshaown65@gmail.com</span>
              </div>
            </div>


            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Cll Me</span>
                <span className="info__des">+088 1709198065</span>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className='contact__social-link'>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className='contact__social-link'>
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className='contact__social-link'>
              <FaYoutube />
            </a>
            <a href="https://dribbble.com" className='contact__social-link'>
              <FaDribbble />
            </a>
          </div>

          
        </div>


        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input type="text" placeholder='Your Name' className='form__control' />
            </div>
            <div className='form__input-div'>
              <input type="email" placeholder='Your Email' className='form__control' />
            </div>
            <div className='form__input-div'>
              <input type="text" placeholder='Your Subject' className='form__control' />
            </div>
          
          </div>

          <div className='form__input-div'>
              <textarea  placeholder='Your Message' className='form__control textarea'></textarea>
          </div>

          <button className='button'>
            Send Message 
             <span className="button__icon contact__button-icon">
              <FiSend className='mt-5 ml-4' />
             </span>
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact;
