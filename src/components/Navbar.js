import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css"
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Navbar(props) {

    //STATES : 
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    // const [isActive3, setActive3] = useState(false);
    // BORDER STYLE :
    const borderStyle = {
        // padding: "1rem",
        height: "4.5rem",
        width: "10rem",
        marginLeft: "auto",
        // textAlign : "left",
        // backgroundColor : "#151515",
        // border : "1px solid white",
        borderRadius: ".8rem"
    }
    // STYLING FOR THE ELEMENTS OF THE WEBPAGE :
    const mystyle = {
        padding: "20px"
    }

    const brand = {
        // padding : "0"
        border: "2px solid white",
        borderRadius: ".5rem"
    }

    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        gsap.to(el, {
            // backgroundColor : "#A0DEFF",
            // backgroundColor : "#0A6847",
            backgroundImage: "linear-gradient(to bottom left,rgb(39, 172, 39),#0A6847 )",

            duration: 0.5,
            height: "5rem",
            scrollTrigger: {
                trigger: ".navbar",
                scroller: "body",
                start: "top -60%",
                // markers: true,
                end: "bottom -70%",
                scrub: 1
            }
        })
    }, [])

    //GSAP FOR THE NAVBAR : 
    // gsap.to(".navbar",{
    //     backgroundColor : "black",
    //     duration: 0.5,
    //     height: "90px",
    //     scrollTrigger:{
    //         trigger: "#nav",
    //         scroller:"body",
    //         start:"top -10%",
    //         // markers: true,
    //         end: "bottom -11%",
    //         scrub:1
    //     }
    // })

    const handledropdown1 = () => {
        // console.log(isActive)
        setActive1(!isActive1)
    }
    const handledropdown2 = () => {
        // console.log(isActive)
        setActive2(!isActive2)
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* <h1 className="text-3xl font-bold underline text-red bg-red-600">
                Hello world!
            </h1> */}
            <nav className='navbar bg-transparent flex justify-start items-center gap-10 h-32 w-full pr-20' ref={ref} style={mystyle}>
                <div className='nav-left w-3/5 flex justify-start items-center gap-10'>
                    <div className='logo'>
                        <Link to="/"><h2 className='h-fit text-3xl px-2 font-bold flex justify-start flex-col bg-white text-green-500' style={brand}>
                            <div className='logo-up'> Mission</div>
                            <div className='logo-down'> NeedyPeople</div>

                        </h2>
                        </Link>
                    </div>

                    {/* <h4 className='nav-element text-white'>
                    <Link to="/">Home</Link>

                </h4> */}
                    <h4 className='nav-element text-white'>

                        <div className="dropdown w-fit h-fit relative">
                            <button className='dropbtn' onClick={() => { handledropdown1() }}>About</button>
                            <div className={`dropdownmenu ${isActive1 ? 'open1' : ''} w-56  bg-green-500 rounded-md absolute shadow-lg `}>
                                <div className='dropdownlinks'>

                                    <Link className='w-full p-2 block hover:bg-green-900' to="/vissionmission">Vision and Mission</Link>
                                    <Link className='w-full p-2 block hover:bg-green-900' to="/ourmentors">Ourmentors</Link>
                                    <Link className='w-full p-2 block hover:bg-green-900' to="">Working Model</Link>
                                    <Link className='w-full p-2 block hover:bg-green-900' to="">Reach and Presence</Link>
                                    <Link className='w-full p-2 block hover:bg-green-900' to="">Gallery</Link>
                                </div>
                            </div>
                        </div>
                    </h4>

                    <h4 className='nav-element text-white'>
                        <button className='dropbtn' onClick={() => { handledropdown2() }}>Our Work</button>
                        <div className={`dropdownmenu ${isActive2 ? 'open1' : ''} w-56  bg-green-500 rounded-md absolute shadow-md `}>
                            <div className='dropdownlinks'>

                                <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="/vissionmission">Overview</Link>
                                <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="/ourmentors">Health</Link>
                                <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Education</Link>
                                <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Food</Link>
                                <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Clothes</Link>
                                <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Drinking Water</Link>
                            </div>
                        </div>
                    </h4>

                    <h4 className='nav-element text-white'>
                        {/* Contact Us */}
                        <Link to="/contact">Contact Us</Link>
                    </h4>

                </div>
                <div className='nav-right w-2/5 flex justify-end items-center gap-x-5'>
                    <h4 className='donate-btn'><button className='text-green-500 bg-white font-bold text-2xl' style={borderStyle}>
                        
                        <Link to="/donation" className="">
                        Daan Patra
                                </Link>
                        </button>
                    </h4>
                    {/* hamburger Menu  */}
                    <div className="hamburger-menu hidden">
                        <button className="hamburger-button" onClick={handleToggle}>
                            <span className="hamburger-icon"></span>
                            <span className="hamburger-icon"></span>
                            <span className="hamburger-icon"></span>
                        </button>
                        <div className={`menu ${isOpen ? 'open2 ' : ''}`}>
                            <div className="menu-inner">
                                {/* <Link to="/about" className="menu-item">
                                    About
                                </Link> */}
                                <div className="dropdown menu-item w-fit h-fit">
                                    <button className='dropbtn' onClick={() => { handledropdown1() }}>About</button>
                                    <div className={`dropdownmenu ${isActive1 ? 'open1' : ''} w-56  bg-green-500 rounded-md absolute right-0 shadow-lg `}>
                                        <div className='dropdownlinks'>

                                            <Link className='w-full p-2 block hover:bg-green-900' to="/vissionmission">Vision and Mission</Link>
                                            <Link className='w-full p-2 block hover:bg-green-900' to="/ourmentors">Ourmentors</Link>
                                            <Link className='w-full p-2 block hover:bg-green-900' to="">Working Model</Link>
                                            <Link className='w-full p-2 block hover:bg-green-900' to="">Reach and Presence</Link>
                                            <Link className='w-full p-2 block hover:bg-green-900' to="">Gallery</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link to="/contact" className="menu-item">
                                    Contact
                                </Link> */}

                                <div className="dropdown menu-item w-fit h-fit">
                                    <button className='dropbtn' onClick={() => { handledropdown2() }}>Our Work</button>
                                    <div className={`dropdownmenu ${isActive2 ? 'open1' : ''} w-56  bg-green-500 rounded-md absolute right-0 shadow-md `}>
                                        <div className='dropdownlinks'>

                                            <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="/vissionmission">Overview</Link>
                                            <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="/ourmentors">Health</Link>
                                            <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Education</Link>
                                            <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Food</Link>
                                            <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Clothes</Link>
                                            <Link className='dropdown-items p-2 w-full block hover:bg-green-900' to="">Drinking Water</Link>
                                        </div>
                                    </div>

                                </div>
                                <Link to="/donation" className="menu-item">
                                    Donate
                                </Link>
                                <Link to="/portfolio" className="menu-item">
                                    Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className='w-20 h-3/5 ml-auto flex justify-center items-center rounded-full bg-white hover:shadow-lg flex-col gap-y-2'>
                    <span className='bg-green-500 w-3/5 h-1 rounded-lg'></span>
                    <span className='bg-green-500 w-3/5 h-1 rounded-lg'></span>
                    <span className='bg-green-500 w-3/5 h-1 rounded-lg'></span>
                </div> */}
            </nav>
        </div>
    )
}
