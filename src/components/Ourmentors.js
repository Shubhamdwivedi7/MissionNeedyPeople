import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Ourmentors.css"

export default function Ourmentors() {
    return (
        <>
            <Navbar />
            <div className="w-full h-32 bg-green-600"></div>
            <div className="mentor-shivam w-full h-fit bg-slate-100 flex justify-center items-center">
                <div className="shivam-image w-2/5 p-10">
                    <img className="m-auto shadow-lg rounded-lg " src="images/passport.jpg" alt="" />

                </div>
                <div className="shivam-text text text-center">
                    <h2 className="my-5 text-5xl font-semibold">Welcome!</h2>

                    <h4 className="my-3 text-3xl">I am Shivam Gupta.</h4>
                    <h4>It is my dream to fulfil every poor person's dream; helping the needy gives me a different kind of happiness.</h4>
                    <h3>No one will support you in life, so believe in yourself and keep moving forward.</h3>
                    <h3>- SHIVAM GUPTA</h3>
                </div>
            </div>


            <div className="mentor-principle w-full h-fit bg-slate-100 flex justify-center items-center">
            <div className="father-image-1 w-1/2 hidden">
                    <img className="w-72 h-72 m-auto shadow-lg rounded-lg " src="images/college father.jpeg" alt="" />

                </div>

                <div className="father-text w-1/2 text text-center">
                    <div className="father-name">
                        <h2 className="my-5 text-5xl font-semibold">Rev.Dr.G.Vazhan Arasu</h2>

                    </div>

                    <div>

                        <h4 className="father-work px-10">Revered Father is currently serving as principal of St. Aloysius College in Jabalpur, MP. He is a very active participant in social causes, and it is during his chieftainship at Aloysius that I developed an interest in social work. Father has led many people down the path of philanthropy, and they are doing
                            amazing things.Mentoring people for a good cause is one of his best traits.
                        </h4>
                    </div>

                </div>

                <div className="father-image-2 w-1/2">
                    <img className="w-72 h-72 m-auto shadow-lg rounded-lg " src="images/college father.jpeg" alt="" />

                </div>
            </div>


            <div className="mentor-deeksha w-full h-fit bg-slate-100 flex justify-center items-center">
                <div className="deeksha-image w-2/5 p-10">
                    <img className=" m-auto shadow-lg rounded-lg " src="images/men eco.png" alt="" />

                </div>
                <div className="deeksha-text w-1/2 text text-center">
                    <h2 className="my-5 text-5xl font-semibold">Deeksha mam</h2>

                    <h4 className="deeksha-work">Deeksha Mam is an assistant professor in the department of economics. She is a renowned academician and has taught many successful entrepreneurs and tech experts. Aside from her involvement in academia, she is also interested in social and humanitarian work. She has actively motivated me during this course.
                        She is mentoring me because she feels it is for the good of the cause.
                    </h4>
                </div>

            </div>
            <div className="mentor-mohit w-full h-fit bg-slate-100 flex justify-center items-center">

                <div className="mohit-image-1 w-1/2 p-10 hidden">
                    <img className="w-72 h-72 m-auto shadow-lg rounded-lg " src="images/men m1.jpg" alt="" />

                </div>
                <div className="mohit-text w-1/2 text text-center">
                    <h2 className="my-5 text-5xl font-semibold">Mohit Gupta</h2>

                    <h4 className="mohit-work px-10">Mohit Gupta is a B.com student at Delhi University who attended the Jawahar Navodaya Vidyalaya in Mahoba, Uttar Pradesh.He is also a good social worker, and he is assisting me with this mission, advising me on how we can do this work equally well, 
                        how we can help the needy, and how we can reduce our poor people ratio.</h4>
                </div>

                <div className="mohit-image-2 w-1/2 p-10">
                    <img className="w-72 h-72 m-auto shadow-lg rounded-lg " src="images/men m1.jpg" alt="" />

                </div>
            </div>
            {/* <div className="w-full h-fit bg-slate-100 flex justify-center items-center">

                <div className="w-1/2 text text-center">
                    <h2 className="my-5 text-5xl font-semibold">Mohit Gupta</h2>

                    <h4 className="px-10">Mohit Gupta is a B.com student at Delhi University who attended the Jawahar Navodaya Vidyalaya in Mahoba, Uttar Pradesh.He is also a good social worker, and he is assisting me with this mission, advising me on how we can do this work equally well, 
                        how we can help the needy, and how we can reduce our poor people ratio.</h4>
                </div>

                <div className="w-1/2 p-10">
                    <img className="w-72 h-72 m-auto shadow-lg rounded-lg " src="images/men m1.jpg" alt="" />

                </div>
            </div> */}

            <Footer />
        </>
    )
}