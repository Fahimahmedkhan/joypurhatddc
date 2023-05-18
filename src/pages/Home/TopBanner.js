import React, { useEffect, useRef, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import image_items_3 from '../../assets/images/07.jpg';
import image_items_1 from '../../assets/images/10.jpg';
import image_items_2 from '../../assets/images/12.jpg';
import image_items_4 from '../../assets/images/18.jpg';

const TopBanner = () => {
    const [width, setWidth] = useState(0);
    const banner = useRef(null);
    // const [images, setImages] = useState([]);

    // function handleResize() {
    //     if (banner.current) {
    //         const width = (banner.current).clientWidth;
    //         setWidth(width);
    //     }
    // }

    // useEffect(() => {
    //     async function fetchImages() {
    //         const response = await fetch('your-api-url');
    //         const data = await response.json();
    //         setImages(data.images);
    //     }
    //     fetchImages();
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);


    const images = [
        { url: image_items_1 },
        { url: image_items_2 },
        { url: image_items_3 },
        { url: image_items_4 },
    ];

    function handleResize() {
        if (banner.current) {
            const width = (banner.current).clientWidth;
            setWidth(width);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="carousel w-full" ref={banner}>
            <SimpleImageSlider
                width={width}
                height={768}
                images={images}
                showBullets={true}
                slideDuration={5.0}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={3}
            />
        </div>
    );
};

export default TopBanner;