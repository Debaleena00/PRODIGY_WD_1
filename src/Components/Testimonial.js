import React from 'react';
import ProfilePic from "../Asset/john-doe-image.png";
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They are Saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem a saepe voluptatibus cum, eius id veniam laudantium alias, tempora eum hic aperiam corrupti facilis officiis similique repellat eos! Laborum, provident.
            </p>
        
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt=''/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure rem, perferendis quis ab corrupti quia repudiandae eveniet voluptatibus voluptatum aut soluta nulla neque eaque ducimus, provident illo. Excepturi, odio!

        </p>
    <div className="testimonials-stars-container">
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    </div>
    <h2>John Doe</h2>
    </div>
    </div>
  );
};

export default Testimonial;
