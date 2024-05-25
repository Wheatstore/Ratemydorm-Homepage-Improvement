import { Application } from '@splinetool/runtime';
import { useEffect } from 'react';
import './banner.css';
import Typewriter from './typewriter';

function Banner() {
    return (
        <>
            <div className='banner-container'>
                <div className='banner-image-container'>
                    <img 
                        src="/banner2.png"
                        alt="Banner"
                        className="banner-image"
                    />
                    <div className='overlay'>
                        <div className='search-school'>
                            <div className='search-img-div'>
                                <img src='/logo.webp' alt='search-title' className='search-img'/> 
                            </div>
                            {/* <div className="search-title-div">
                                <Typewriter className='search-title' text="Search your school" />
                            </div> */}
    
                            <form>
                                <input className='search-school-input' type='text' placeholder='Search for your school here' />
                                <button className='search-button' type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
