import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
    return (
        <>

            <Navbar />

            <div className="w-full h-screen flex justify-start items-center flex-col bg-slate-100">

                <div className="w-full h-32 bg-green-600"></div>
                <div className="w-3/5 h-3/5 p-24 my-8 bg-white shadow-lg rounded-lg flex flex-col">

                    <h1 className=" text-5xl font-medium mb-8 text-green-600 flex justify-center items-center gap-2">
                        <div className="">
                            Let's Connect
                        </div>
                        <div className="w-4 h-4 mt-5 bg-green-600 rounded-full"></div>
                    </h1>
                    <div className="w-4/5 h-16 mx-auto text-center">
                        <h4>

                            "Get in touch with us to make a difference! Whether you have a question, want to volunteer, or simply want to learn more about
                            our mission, we'd love to hear from you. Your support can bring hope to those in need. Contact us today and join the movement!"
                        </h4>
                        <p><a className="hover:text-green-700 font-medium underline" href="mailto:ramprasadg469@gmail.com" target="_blank">Click Here to connect!</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}