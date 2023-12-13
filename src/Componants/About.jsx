
const About = () => {
    return (
        <div>
                <div className="flex justify-around items-center mx-[300px]">
        <div >
       
        <p className="text-[55px] text-black font-a">ABOUT <span className="text-[#FFBF00]" > ME </span>...</p>
         <p className="font-b text-[18px] my-[50px]">Aspiring software engineer on a journey through the MERN stack.<br/>
                                           Skilled in React, Node.js and MongoDB. Turning concepts into <br/>
                                           robust web solutions .</p>
        <button className='w-[150px] h-[50px] mt-[10px] bg-[#FFBF00] hover:bg-white text-[18px] text-black' style={{border: '3px solid black'}}>Download CV</button>                                
        </div>
        <div>
           <img className="w-[400px]" src="https://i.ibb.co/bdc03fs/Untitled-design-8.png"></img>
        </div>
    </div>
        </div>
    );
};

export default About;