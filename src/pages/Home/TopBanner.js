import React from 'react';
import image_items_1 from '../../assets/images/05.jpg';
import image_items_2 from '../../assets/images/06.jpg';
import image_items_3 from '../../assets/images/07.jpg';
import image_items_4 from '../../assets/images/08.jpg';
import ImageSlider, { Slide } from "react-auto-image-slider";

const TopBanner = () => {

    return (
        <div className="carousel w-full">
            <ImageSlider effectDelay={500} autoPlayDelay={5000} >
                <Slide>
                    <img alt="img2" src={image_items_1} className='w-full h-96' />
                </Slide>
                <Slide>
                    <img alt="img2" src={image_items_2} className='w-full h-96' />
                </Slide>
                <Slide>
                    <img alt="img1" src={image_items_3} className='w-full h-96' />
                </Slide>
                <Slide>
                    <img alt="img1" src={image_items_4} className='w-full h-96' />
                </Slide>
            </ImageSlider>
        </div>
    );
};

export default TopBanner;