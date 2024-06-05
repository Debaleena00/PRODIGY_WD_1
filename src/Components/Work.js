import React from 'react';
import PickMeals from  "../Asset/pick-meals-image.png"; 
import ChooseMeals from  "../Asset/choose-image.png"; 
import DeliveryMeals from  "../Asset/delivery-image.png"; 

const Work = () => {
    const workInfoData =[
        {
            image: PickMeals,
            title:"Pick Meals"
        },
        {
            image: ChooseMeals,
            title:"Choose Meals for your criteria"
        },
        {
            image: DeliveryMeals,
            title:"Delivery Meals in just 20 mins"
        },
    ];
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top" >
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore officia fugiat sit possimus necessitatibus! Quae rem quibusdam cum omnis reprehenderit! Doloremque tempora debitis corrupti ducimus labore id dolor repellat enim.
        </p>
    </div>
    <div className="work-section-bottom">
        {
            workInfoData.map((data) =>  (
                <div className="work-section-info">
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>

        ))}
    </div>
    </div>);
};
    

export default Work;
