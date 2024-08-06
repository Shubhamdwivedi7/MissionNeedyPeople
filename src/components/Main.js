// 320 px Mobile portrait
// 480 px Mobile landscape
// 600 px Small tablet
// 768 px Tablet portrait
// 1024 px Tablet landscape/Netbook
// 1280 px & greater — Desktop

import React from 'react';
// import ReactDOM from 'react-dom';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Main() {

    // const mystyle = {
    //     padding : "30px"
    // }

    // BORDER STYLE :
    const borderStyle = {
        // padding: "1rem",
        height : "3rem",
        width: "10rem",
        // border : "1px solid white",
        borderRadius : ".8rem"
    }
    // render() {
    return (
        <>
            <div className='carousel w-full h-screen -z-10'>
                
                 <div className='text w-screen h-screen px-72 pt-32 flex justify-center items-center flex-col text-center z-60 absolute z-50  gap-y-8' >
                       <div className='headtext text-white text-6xl font-bold leading-tight'>
                        We make a living by what we get, but we make a life by what we give.
                       </div>
                    {/* <button className='text-white font-medium bg-green-700' style={borderStyle}>Daan Patra</button> */}
                        {/* <div className='sub-text text-white text-xl bg-transparent'>– Winston Churchill.</div> */}
                </div> 
                <div className='shadow w-full h-screen bg-black opacity-50 text-white absolute flex justify-center items-center z-40'>
                </div>

                <Carousel className='h-fit' interval="4000" autoPlay="true" autoFocus="true" infiniteLoop="true" showArrows={false} showStatus={false}>
                    <div>
                        <img src="images/help1.jpg" alt="no-image1" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="./images/help2.jpg" alt="no-image2" />
                        {/* <p className="legend hidden">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="./images/help3.jpg" alt="no-image3" />
                        {/* <p className="legend hidden text-black">Legend 3</p> */}
                    </div>
                    <div>
                        <img src="./images/help4.jpg" alt="no-image3" />
                        {/* <p className="legend hidden text-black">Legend 4</p> */}
                    </div>
                </Carousel>
            </div>
        </>

    );

}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
