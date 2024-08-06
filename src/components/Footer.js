import react from "react"
import '../Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {

    const donate = {
        width: "5rem",
        height: "5rem",
        // border: "2px solid red",
        // borderRadius : "50%"
    }

    const brand = {
        // padding : "0"
        border: "2px solid white",
        borderRadius : ".5rem"
    }

    const footer = {
        height : "80vh"
    }

    const lineStyle = {
        // textAlign : "center",
        margin : ".5rem auto",
        height : "0px",
        borderTop : "5px dotted #254336",
        width : "70%"
    }

    return (
        <>
        
            <div className="footer w-full py-8" style={footer}>

                {/* SECTION 1  */}
                <div className="section-1 flex justify-evenly items-center">
                    <div className="image flex justify-center items-center flex-col">
                        <img className="mix-blend-multiply" style={donate} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UnhSMvg2PFunvvkKPexE8--3pGDK-FuQ0A&s" alt="noimage"></img>
                        <h4 className="text-xl text-white font-medium">Donate</h4>
                    </div>
                    <div className="image flex justify-center items-center flex-col">
                        <img className="mix-blend-multiply flex justify-center items-center flex-col" style={donate} src="https://cdn-icons-png.flaticon.com/512/15/15659.png"></img>
                        <h4 className="text-xl text-white text-center font-medium">About Us</h4>
                    </div>
                    <div className="image flex justify-center items-center flex-col">
                        <img className="mix-blend-multiply" style={donate} src="https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg"></img>
                        <h4 className="text-xl text-white text-center font-medium">Contact Us</h4>
                    </div>
                </div>

                <hr style={lineStyle}/>
            {/* SECTION 2  */}
                <div className="section-2 w-full h-3/5 flex justify-center items-center flex-row gap-2">
                    <div className="section w-1/4  text-center">
                        <h2 className="text-white text-3xl font-semibold my-3">About</h2>
                        <h4 className="hover:text-white">Overview</h4>
                        <h4 className="hover:text-white">Vision Mission</h4>
                        <h4 className="hover:text-white">Our Mentors</h4>
                        <h4 className="hover:text-white">Working Model</h4>
                        <h4 className="hover:text-white">Reach & Presence</h4>
                        <h4 className="hover:text-white">Gallery</h4>
                    </div>


                    <div className="section w-1/4  text-center">
                    <h2 className="text-white text-3xl font-semibold  my-3">Our Work</h2>
                        <h4 className="hover:text-white">Overview</h4>
                        <h4 className="hover:text-white">Health</h4>
                        <h4 className="hover:text-white">Education</h4>
                        <h4 className="hover:text-white">Food</h4>
                        <h4 className="hover:text-white">Clothes</h4>
                        <h4 className="hover:text-white">Drinking Water</h4>
                    </div>

                    <div className="logo-section w-1/4">
                        {/* <h2 className="text-3xl font-semibold my-3">Mission Needy People</h2> */}
                        {/* <h2 className='logo-footer w-fit m-auto text-3xl px-2 font-bold bg-white text-green-500 text-left' style={brand}>Mission<br></br>NeedyPeople</h2> */}
                        <div className='logo w-fit'>
                        <Link to="/"><h2 className='h-fit text-3xl px-2 font-bold flex justify-start flex-col bg-white text-green-500' style={brand}>
                            <div className='logo-up'> Mission</div>
                            <div className='logo-down'> NeedyPeople</div>

                        </h2>
                        </Link>
                    </div>

                        <h4>Mission needy people runed by Shivam Gupta, In which they provide food and clothes to the needy people.

                        </h4>
                        <h4>+91-7880517657</h4>
                        <h4>+91-9340413954 </h4>
                        <h4>+91-9425634860</h4>
                    </div>

                </div>

                <hr  style={lineStyle}/>

                {/* SECTION 3  */}
                <div className="section-3 w-full h-11 text-center py-5 text-bold">
                <p className="text-bold text-wrap">© 2023. Mission Needy People All rights reserved.</p>
                </div>

            </div>
        </>
    )
}