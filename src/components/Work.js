import React from 'react'

export default function Work(){

     // BORDER STYLE :
     const borderStyle = {
        // padding: "1rem",
        height : "3rem",
        width: "10rem",
        // border : "1px solid white",
        borderRadius : ".8rem"
    }

    const backgroundColor = {
        backgroundColor : "#EEEEEE"
    }
    return (
        <>
            <div className='w-full h-fit bg-white overflow-hidden' style={backgroundColor}>

                {/* HEADING AND DONATE BUTTONS SECTION  */}
                <div className='head w-full h-fit text-center'>
                    <h2 className='pt-8 text-5xl font-semibold'>Our Work</h2>
                    <h4 className='px-48 py-7'>
                        We help the needy and those who are strangled or stranded. We provide them with the weaponry necessary to curb the capitalists' tyranny. We are actually helping ourselves to get a sense of fulfilling our duties, and we feel a 
                        bit contented when we serve the impaired section of our society. To get involved, try to become a part of it.
                    </h4>
                    <button className='text-white font-medium bg-green-700 hover:bg-green-600 shadow-lg' style={borderStyle}>Donate</button>

                </div>

            {/* Cards section  */}
                <div className='cards w-full h-3/5 py-24 flex justify-center items-center flex-wrap gap-9'>
                    <div className='card w-1/4 h-76 p-3 bg-white rounded-xl text-center shadow-xl'>
                        <h2 className='py-4 text-3xl font-semibold'>Team Members</h2>
                        {/* <h2 className=''>dsfjs</h2> */}
                        <h4>
                        Many of our team members and good-hearted people continue to assist my mission and our needy people, making my dream a reality. I have a 200+ member network working for our mission, and I am grateful to our mentors for putting me on the right track.
                         Currently, our team members are working in two states: Uttar Pradesh and Madhya Pradesh. 
                        </h4>
                    </div>
                    <div className='card w-1/4 h-76 p-3 bg-white rounded-xl text-center shadow-xl'>
                        <h2 className='py-4 text-3xl font-semibold'>Fund</h2>
                        <h4>
                        We provide food, clothing, education, drinking water, etc. for the needy people.Good-hearted people who are actively involved in helping the poor contribute to our mission. People can donate from 5 rupees to 1 lakh rupees, and you can also donate
                         your retired clothes for poor people. My team goes into every house and asks for retired clothes.
                        </h4>
                    </div>
                    <div className='card w-1/4 h-76 p-3 bg-white rounded-xl text-center  shadow-xl'>
                        <h2 className='py-4 text-3xl font-semibold'>Fund Management</h2>
                        <h4>
                        Management of all funds is centralised and remains under the exclusive control of Shivam Gupta, his friend Mohit Gupta, and team head Harsh Sharma, who are personally involved in all operations of the mission. Mohit Gupta is also responsible 
                        for outside fund raising, and for local fund raising, Harsh Sharma is responsible.
                        </h4>
                    </div>
                    
                </div>

                {/* YOUTUBE INSTAGRAM AND INTRO SECTION  */}

                <div className='accounts w-full h-screen'>
                    <div className='socials w-full h-fit flex justify-center items-center gap-40'>
                        <div className='w-1/3 bg-white shadow-lg rounded-lg'>
                            <h2 className='py-6 text-center text-3xl font-semibold'>Youtube</h2>
                            <video className="m-auto" loop="loop" width="250px" height="200px" controls>
                                <source autoPlay  src='images/youtube.mp4' type='video/mp4'></source>
                            </video>
                            {/* <video  width="250px" height="200px" controls autoplay className="m-auto" src="images/insta.mp4" type='video/mp4'></video> */}
                            <h4 className='p-3 text-center'><a href="https://www.youtube.com/@MNP2560">Channel Link</a></h4>
                            {/* https://www.youtube.com/@MNP2560 */}
                        </div>
                        <div className='w-1/3 bg-white shadow-lg rounded-lg'>
                            <h2 className='py-6 text-center text-3xl font-semibold'>Instagram</h2>
                            <video className="m-auto"src="images/insta.mp4" controls autoPlay="autoplay" loop="loop" width="250px" height="200px"></video>
                            <h4 className='p-3 text-center'><a href="https://www.instagram.com/mnp2560?igshid=ZDdkNTZiNTM%3D">Profile Link</a></h4>
                            {/* https://www.instagram.com/mnp2560?igshid=ZDdkNTZiNTM%3D */}
                        </div>
                    </div>
                    
                    {/* <div>

                    <div></div>
                    </div> */}
                </div>

                <div className='w-full h-fit pb-20 flex justify-center items-center'>
                        <button className='donate-button w-1/5 h-20 font-semibold text-white hover:bg-green-600 text-2xl bg-green-700 shadow-lg rounded-xl'>
                           Donate 
                        </button>
                    </div>
            </div>    
        </>
    )
}