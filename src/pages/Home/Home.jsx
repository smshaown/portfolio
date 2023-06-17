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
                <div className='home_data'>
                    <h1 className='home-title'>
                        <span>I'm S M Shaown</span> Web Designer
                    </h1>
                    <p>I'm a Tunisian based web designer & front-end developer focused on crafting clean $ user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
                <Link to="/about" className='button'>
                    More About Me <span className='button_icon'><FaArrowRight /></span>
                </Link>
            </div>
        </section>
    );
};

export default Home;