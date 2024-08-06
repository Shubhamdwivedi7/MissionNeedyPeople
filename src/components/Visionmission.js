import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Visionmission.css"
import { Carousel } from 'react-responsive-carousel';


export default function Visionmission(){
    return(
        <>

            {/* <h3>dfldslfkj</h3> */}
            <Navbar className="z-50"/>
            <div>
            {/* <div className='shadow w-full h-screen bg-black opacity-50 text-white absolute flex justify-center items-center z-40'> */}

                </div>
                {/* <div className='shadow w-full h-screen bg-black opacity-50 text-white absolute flex justify-center items-center z-4'>
                </div> */}
            <Carousel className='h-fit' interval="4000" autoPlay="true" autoFocus="true" infiniteLoop="true" showArrows={false} showThumbs={false} showStatus={false}>
                    <div>
                        <img src="images/ph19.jpg" alt="no-image1" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="./images/ph17.jpg" alt="no-image2" />
                        {/* <p className="legend hidden">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="./images/ph22.jpg" alt="no-image3" />
                        {/* <p className="legend hidden text-black">Legend 3</p> */}
                    </div>
                    <div>
                        <img src="./images/ph23.jpg" alt="no-image3" />
                        {/* <p className="legend hidden text-black">Legend 4</p> */}
                    </div>
                </Carousel>
            {/* </div> */}

            <div className="vision-1 w-full h-fit p-10 bg-slate-100">
                <div className="vision-2 w-3/5 text-center h-fit m-auto p-10 bg-white rounded-lg shadow-lg">
                <h2 className="vision-head text-5xl p-10 font-semibold text-center">Vision and Mission</h2>
                <div className="vision-text flex justify-center items-center flex-col gap-7">
                    <div className="vision-text w-3/5 text-xl">
                    My mission is to take this small dream of mine to a bigger level.No one sleeps hungry; may the dreams of
                     every parent's children be fulfilled; every son of India should study; and I also want to open a big hospital.
                    </div>
                    <div className="vision-text w-3/5 text-xl">
                    When we see needy people, we can't sit back and watch their pity and misery grow with each passing day. So we have started this mission of providing a helping hand to all those in dire need. We will be giving money,
                      food, and other commodities as assistance. Our ultimate goal is to eliminate hunger and poverty.
                    </div>
                </div>
                </div>
               
            </div>
            <Footer/>
        </>
    )
}