import React from 'react';
import Profile  from '../../assets/profile.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css'



const Home = () => {
    return (
        <section className='home section grid'>
            <div>
              <img src={Profile} alt="" className='home__img' />
            </div>

            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'>
                        <span>I'm S M Shaown.</span> <br/> Web Designer
                    </h1>

                    <p className='home__description'>I'm a Tunisian based web designer & front-end developer focused on crafting clean $ user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                    <Link to="/about" className='button'>
                    More About Me <span className='button__icon'><FaArrowRight className='mt-5 ml-5' /></span>
                 </Link>
                </div>
              
            </div>

            <div className='color__block'></div>
        </section>
    );
};

export default Home;