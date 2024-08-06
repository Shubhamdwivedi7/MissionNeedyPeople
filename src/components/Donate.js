import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Donate() {
    return (
        <>
            <Navbar />

            <div className="donate w-full h-fit bg-slate-200">

                <div className="w-full h-32 bg-green-600"></div>
                <div className="h-full px-20 flex justify-center items-center">

                    <h4>Click on this Google Form Link to show your Attribute towards the good cause : </h4>
                    <div className="block">

                    <Link className="font-bold text-green-600" to="https://forms.gle/fpgyYNW3yHmn52vv7">Click Here!</Link>
                    </div>
                {/* <form className="w-full max-w-md mx-auto p-4 pt-6 mb-4">
                    <h2 className="text-2xl font-bold mb-4">Donate Form</h2>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                type="text"
                                required
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="location"
                            >
                                Location
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="location"
                                type="text"
                                required
                                placeholder="Enter your location"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="amount"
                            >
                                Amount
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="amount"
                                type="number"
                                placeholder="Enter amount"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="contact"
                            >
                                Contact (optional)
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="contact"
                                type="text"
                                defaultValue={null}
                                placeholder="Phone or email"
                            />
                        </div>
                    </div>
                    <div className="">

                    <button
                        className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shadow-lg"
                        type="submit"
                    >
                        Donate
                    </button>
                    </div>
                </form> */}

                
                </div>
            </div>


            <Footer />
        </>
    )
}