import React from 'react';
import Navber from './Navbar';
import BannerBackground from "../Asset/home-banner-background.png";
import BannerTmage from "../Asset/home-banner-image.png";
import { FiArrowRight} from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home.container'>
      <Navber/>
      <div className="home-banner-container">
        <div className="home-banner-Image-container">
          <img src={BannerBackground} alt=''/>
        </div>
        <div className="home-text-section">
          <h1 className='primary-heading'>
            Your Favourite Hot && Fresh Food Delivered Here
               <p className='primary-text'>
                 Healthy Tasty And Delicious Food Anytime 
                 Anywhere in 
                    Just 29 mins.
               </p>
               <botton className="secondary.button">
                Order Now <FiArrowRight />
             </botton>
          </h1>
        </div>
        <div className='home-image-container'>
          <img src={BannerTmage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;
