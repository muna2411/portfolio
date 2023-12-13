import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Headline from "./Headline";


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openLink1 = () => {
    const linkToOpen = 'https://chocolate-64741.web.app';
    window.open(linkToOpen, '_blank');
  };   
  
  const openLink2 = () => {
    const linkToOpen = 'https://courageous-malasada-065d71.netlify.app';
    window.open(linkToOpen, '_blank');
  }; 

  const openLink3 = () => {
    const linkToOpen = 'https://name-of-your-project-6e4ab.web.app';
    window.open(linkToOpen, '_blank');
  }; 

  const openLink4 = () => {
    const linkToOpen = 'https://assignment9-a6c85.web.app';
    window.open(linkToOpen, '_blank');
  }; 


  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const eduRef = useRef(null);
  const proRef = useRef(null);
  const conRef = useRef(null);

const handleAbout = () =>{
  aboutRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handleSkill = () =>{
  skillRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handleEdu = () =>{
  eduRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handlePro= () =>{
  proRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handleCon = () =>{
  conRef.current?.scrollIntoView({behavior: 'smooth'});
}

    return (

        <div>
            <div className="navbar bg-[#FFFDD0]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link to="/"> <li><a>Home</a></li></Link>
      <button  onClick={handleAbout}>About</button>
      <button  onClick={handleSkill}>Skill</button>
      <button  onClick={handleEdu}>Qualification</button>
      <button  onClick={handlePro}>Projects</button>
      <button  onClick={handleCon}>Contact</button>
      </ul>
    </div>
{/* https://i.ibb.co/C1GK6g0/Screenshot-2023-12-12-155942.png */}
{/* https://i.ibb.co/HgfsyfP/Screenshot-2023-12-12-155836.png */}
   
   <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/3kg5Ddz/Screenshot-2023-12-12-155942-removebg-preview-1.png"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <Link to="/"> <li className="text-[#FFBF00] text-[25px] font-b"><a>Home</a></li></Link>
     
      <button onClick={handleAbout} className="text-[#FFBF00] text-[25px] font-b mx-[20px]">About</button>
      <button onClick={handleSkill} className="text-[#FFBF00] text-[25px] font-b mx-[20px]">Skill</button>
      <button onClick={handleEdu} className="text-[#FFBF00] text-[25px] font-b mx-[20px]">Qualification</button>
      <button onClick={handlePro} className="text-[#FFBF00] text-[25px] font-b mx-[20px]">Projects</button>
      <button onClick={handleCon} className="text-[#FFBF00] text-[25px] font-b mx-[20px]">Contact</button>
      
    </ul>
  </div>
  
</div>
<div className="divider bg-black h-[1px] w-[1500px] mx-auto mt-[-20px]"></div>


<div className="bg-[#FFFDD0]">
  {/* home */}
   
    <div className="flex justify-around items-center" >
        <img className="mt-[-350px]" src="https://i.ibb.co/N7yMm7P/ca97c01bafafead414a09b74fe39d311-removebg-preview.png"></img>
    <div className="text-center bg-[#FFFDD0] ">
        <div >
            <p className="text-[55px] text-black font-a ">Hi , This Is <span className="text-[#FFBF00]" style={{ textDecoration: 'underline', textDecorationColor: 'black' }}>Muna</span><img className="mt-[-250px] ml-[350px] " src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></p>
            <p className="text-[20px] font-b my-[15px] ">Working As A Junior Web Developer</p>
            
        </div>
    </div>
    <img className="w-[300px] mt-[350px] mb-[60px]"  src="https://i.ibb.co/8NVyh0d/a2-removebg-preview-1.png"></img>
    </div>

{/* about */}

    <div className="flex justify-around items-center mx-[300px] my-[200px]">
        <div >
        <img className=" w-[420px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img>
         <div className="mt-[-110px]"> <Headline ref={aboutRef}  text="About Me"/> </div>
        {/* <p className="text-[55px] text-black font-a">ABOUT <span className="text-[#FFBF00]" > ME </span>...</p> */}
         <p className="font-b text-[18px] my-[50px]">Aspiring software engineer on a journey through the MERN stack.<br/>
                                           Skilled in React, Node.js and MongoDB. Turning concepts into <br/>
                                           robust web solutions .</p>
        <button className='w-[150px] h-[50px] mt-[10px] bg-[#FFBF00] hover:bg-white text-[18px] text-black' style={{border: '3px solid black'}}>Download CV</button>                                
        </div>
        <div>
           <img className="w-[500px]" src="https://i.ibb.co/bdc03fs/Untitled-design-8.png"></img>
        </div>
    </div>



    {/* skill */}

<div className="mt-[300px] flex justify-between items-center w-full">
  <div className="flex">
  <img className="w-[580px] h-[580px]" src="https://i.ibb.co/5n184BQ/Untitled-design-3-removebg-preview.png"></img>
  <div className="mt-[200px] ml-[-250px]"><Headline ref={skillRef}  text="MY SKILLS --->" /><img className="mt-[-270px] ml-[-30px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
  
  </div>
  <div>
   <div className="grid grid-cols-4 gap-[60px] mr-[50px]">
   <div className="radial-progress  text-[#FFBF00]  text-[18px] font-b" style={{ "--value": "90", "--size": "8rem", "--thickness": "8px" }} role="progressbar"><span className="text-black">Html - 90%</span></div>
   <div className="radial-progress  text-[18px] font-b" style={{ "--value": "75", "--size": "8rem", "--thickness": "8px" }} role="progressbar"><span className="text-black">CSS - 75% </span></div>
   <div className="radial-progress  text-[#FFBF00] text-[18px] font-b" style={{ "--value": "80", "--size": "8rem", "--thickness": "8px" }} role="progressbar"> <span className="text-black">Tailwind - 80%</span></div>
   <div className="radial-progress  text-[18px] font-b" style={{ "--value": "60", "--size": "8rem", "--thickness": "8px" }} role="progressbar"><span className="text-black">JS - 60%</span></div>
   <div className="radial-progress  text-[#FFBF00] text-[18px] font-b" style={{ "--value": "65", "--size": "8rem", "--thickness": "8px" }} role="progressbar"><span className="text-black">React - 65%  </span></div>
   <div className="radial-progress  text-[18px] font-b" style={{ "--value": "68", "--size": "8rem", "--thickness": "8px" }} role="progressbar"><span className="text-black">node.js - 68%</span></div>
   <div className="radial-progress  text-[#FFBF00] text-[18px] font-b" style={{ "--value": "70", "--size": "8rem", "--thickness": "8px" }} role="progressbar"> <span className="text-black">Mongodb-70%</span></div>
   
   </div>
  </div>
</div>



{/* education */}

<div className="mb-[100px]">
<div className="mt-[200px] text-center "><Headline ref={eduRef}  text="Educational Qualification" /><img className="mt-[-250px] ml-[750px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
 
 <div >
 <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
  <li>
    <div className="timeline-middle ">
    <img className="w-[80px]" src="https://i.ibb.co/qxh47tC/Untitled-design-10-removebg-preview.png" ></img>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2023</time>
      <div className="text-lg font-black">B.Sc in Computer Science & Engineering</div>
      <p>
      International Islamic University Chittagong<br/>
      CGPA  - 3.59
      </p>
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      
<img className="w-[80px]" src="https://i.ibb.co/qxh47tC/Untitled-design-10-removebg-preview.png" ></img>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2018</time>
      <div className="text-lg font-black">HSC</div>
      <p>Kazem Ali College Chittagong<br/>
      GPA - 4.00</p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <img className="w-[80px]" src="https://i.ibb.co/qxh47tC/Untitled-design-10-removebg-preview.png" ></img>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2016</time>
      <div className="text-lg font-black">SSC</div>
      <p>South West Bakolia High School , Chittagong<br/>
      GPA - 4.28</p>
    </div>
    <hr />
  </li>

</ul>
 </div>
</div>


{/* projects */}

<div className="mt-[200px] text-center "><Headline ref={proRef}  text="My Project List" /><img className="mt-[-250px] ml-[650px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
<div className="grid grid-cols-2 mx-[180px] ">
  {/* 1 */}
  <div className="w-[580px] h-[300px] shadow-2xl bg-white  my-[30px] relative">
      <div
        className="w-[580px] h-[300px] relative"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/B4dGcGK/1.png"
          alt="Your Image"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFBF00]  w-[120px] h-[50px] text-black"
              onClick={openLink1}
            >
              View
            </button>
          </div>
        )}
      </div>
    </div>

{/* <HoveredImage imageUrl="https://i.ibb.co/B4dGcGK/1.png" linkFunction={openLink1} /> */}
  
{/* 2 */}

<div className="w-[580px] h-[300px] shadow-2xl bg-white  my-[30px] relative">
      <div
        className="w-[580px] h-[300px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/Y0CVJB0/Screenshot-59.png"
          alt="Your Image"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFBF00]  w-[120px] h-[50px] text-black"
              onClick={openLink2}
            >
              View
            </button>
          </div>
        )}
      </div>
    </div>
{/* 3 */}
<div className="w-[580px] h-[300px] shadow-2xl bg-white  my-[30px] relative">
      <div
        className="w-[580px] h-[300px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/jGpYfy0/Screenshot-56.png"
          alt="Your Image"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFBF00]  w-[120px] h-[50px] text-black"
              onClick={openLink3}
            >
              View
            </button>
          </div>
        )}
      </div>
    </div>



    <div className="w-[580px] h-[300px] shadow-2xl bg-white  my-[30px] relative">
      <div
        className="w-[580px] h-[300px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/TRb2Qrc/Screenshot-57.png"
          alt="Your Image"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFBF00]  w-[120px] h-[50px] text-black"
              onClick={openLink4}
            >
              View
            </button>
          </div>
        )}
      </div>
    </div>

</div>



{/* contact */}
<div className="mt-[200px] text-center "><Headline ref={conRef}  text="Contact Me" /><img className="mt-[-250px] ml-[600px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
<div>

</div>


</div>
        </div>
    );
};

export default Navbar;