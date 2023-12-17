import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Headline from "./Headline";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt} from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Swal from 'sweetalert2'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import pdf from '../assets/muna.pdf';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Navbar = () => {


  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("../../src/assets/muna.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "muna.pdf";
            alink.click();
        });
    });
};
  const emailAddress = 'nurnahar.muna.2411@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/nur-nahar-muna-0084142a4/';
  const location = 'https://www.google.com/maps/place/17+No.+West+Bakalia+Ward,+Chattogram/@22.3516772,91.8445535,15z/data=!4m6!3m5!1s0x30ad276c6e2b0f99:0x56129b01088360bd!8m2!3d22.35016!4d91.8440259!16s%2Fg%2F11dd_tdbv0?entry=ttu'

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qeutjdp', 'template_kag4xnw', form.current, 'rPbZzwJKv6ivVb0F7')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: "Successfully Send",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
      }, (error) => {
          console.log(error.text);
      });
  };



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
    const linkToOpen = ' https://name-of-your-project-6e4ab.firebaseapp.com';
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
<div className="divider bg-black h-[1px] lg:w-[1500px] md:w-[768px] sm:w-[640px] mx-auto mt-[-20px]"></div>


<div className="bg-[#FFFDD0]">
  {/* home */}
   
    <div className="flex justify-around items-center" >
        <img className="mt-[-350px] lg:w-[350px] md:w-[250px] sm:w-[200px]" src="https://i.ibb.co/N7yMm7P/ca97c01bafafead414a09b74fe39d311-removebg-preview.png"></img>
    <div className="text-center bg-[#FFFDD0] ">
        <div >
            <p className="text-[55px] text-black font-a ">Hi , This Is <span className="text-[#FFBF00]" style={{ textDecoration: 'underline', textDecorationColor: 'black' }}>Muna</span><img className="lg:mt-[-250px] md:mt-[-130px] sm:mt-[-120px] lg:ml-[350px] md:ml-[70px] sm:ml-[80px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></p>
            <p className="text-[20px] font-b lg:my-[15px] md:my-[30px]">Front-end Web Developer</p>
            
        </div>
    </div>
    <img className="w-[300px] mt-[350px] mb-[60px] lg:w-[350px] md:w-[250px] sm:w-[200px]"  src="https://i.ibb.co/8NVyh0d/a2-removebg-preview-1.png"></img>
    </div>

{/* about */}

    <div className="flex justify-around items-center lg:mx-[300px] md:mx-[0px] my-[200px]">
        <div >
        <img className="w-[420px] " src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img>
         <div className="lg:mt-[-110px] md:mt-[-110px] sm:mt-[-80px]"> <Headline ref={aboutRef}  text="About Me"/> </div>
        {/* <p className="text-[55px] text-black font-a">ABOUT <span className="text-[#FFBF00]" > ME </span>...</p> */}
         <p className="font-b text-[18px] my-[50px]">Aspiring software engineer on a journey through the MERN stack.<br/>
                                           Skilled in React, Node.js and MongoDB. Turning concepts into <br/>
                                           robust web solutions .</p>
      <button onClick={onButtonClick} className='w-[150px] h-[50px] mt-[10px] bg-[#FFBF00] hover:bg-white text-[18px] text-black' style={{border: '3px solid black'}}>Download CV</button>                          
        </div>
        <div>
           <img className="w-[500px]" src="https://i.ibb.co/bdc03fs/Untitled-design-8.png"></img>
        </div>
    </div>



    {/* skill */}

<div className="mt-[300px] flex justify-between items-center w-full lg:flex-row md:flex-col sm:flex-col">
  <div className="flex">
  <img className="lg:w-[580px] lg:h-[580px] md:w-[500px] md:h-[500px]" src="https://i.ibb.co/5n184BQ/Untitled-design-3-removebg-preview.png"></img>
  <div className="mt-[200px] ml-[-250px]"><Headline ref={skillRef}  text="MY SKILLS --->" /><img className="lg:mt-[-270px] md:mt-[-270px] sm:mt-[-200px] lg:ml-[-30px] md:ml-[10px] sm:ml-[50px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
  
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
<div className="mt-[200px] text-center "><Headline ref={eduRef}  text="Educational Qualification" /><img className="lg:mt-[-250px] md:mt-[-250px] sm:mt-[-250px] lg:ml-[750px] md:ml-[320px] sm:ml-[240px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
 
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


<div className="mt-[200px] text-center "><Headline ref={proRef}  text="My Projects" /><img className="mt-[-250px] lg:ml-[620px] md:ml-[230px] sm:ml-[150px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
{/* <div className="grid grid-cols-2 mx-[180px] "> */}
  {/* 1 */}

  <Swiper className="w-[600px] h-[580px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >


<SwiperSlide>
  <div className="w-[600px] h-[500px] shadow-2xl  my-[30px] relative" style={{ border: '2px solid black'}}>   
      <div
        className="relative flex justify-around items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
       <div className="mt-[30px]">
       <img  className=" w-[400px] h-[200px]" src="https://i.ibb.co/B4dGcGK/1.png"></img>
       <div className="flex justify-around items-center mt-[10px]">
       <div >
       <img className="w-[170px] mb-[3px]" src="https://i.ibb.co/5BRzqvM/chocolate-64741-web-app-6.png"></img>
       <img className="w-[170px] mb-[3px]" src="https://i.ibb.co/qsxckNZ/chocolate-64741-web-app-7.png"></img>
      
       </div>
       <div>
       <img className="w-[170px] mb-[3px]" src="https://i.ibb.co/T2LKHw9/chocolate-64741-web-app-8.png" ></img>
       <img className="w-[170px] mb-[3px]" src="https://i.ibb.co/nRxpNXT/chocolate-64741-web-app-9.png" ></img>
       </div>
       </div>
       </div>
        <img
          className=" w-[120px] h-[470px]"
          src="https://i.ibb.co/0yGtWSM/chocolate-64741-web-app-4.png"
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
    </SwiperSlide>


{/* <HoveredImage imageUrl="https://i.ibb.co/B4dGcGK/1.png" linkFunction={openLink1} /> */}
  
{/* 2 */}
<SwiperSlide>
<div className="w-[600px] h-[500px] shadow-2xl  my-[30px] relative" style={{ border: '2px solid black'}}>   
      <div
        className="relative flex justify-around items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
       <div className="mt-[15px]">
       <img  className=" w-[400px] h-[200px]" src="https://i.ibb.co/WKX9XS6/Screenshot-63.png"></img>
       <div className="flex justify-around items-center mt-[10px]">
       <div >
       <img className="w-[170px] mb-[3px]" src="https://i.ibb.co/VTXjYVp/courageous-malasada-065d71-netlify-app-book-6547a3b9116b7e53828bd6e6.png"></img>
       <img className="w-[170px] mb-[3px]" src="https://i.ibb.co/m0Ykfhx/courageous-malasada-065d71-netlify-app-book-6547a3b9116b7e53828bd6e6-1.png"></img>
       <img className="w-[170px]" src="https://i.ibb.co/HxQVyM4/courageous-malasada-065d71-netlify-app-book-6547a3b9116b7e53828bd6e6-2.png" ></img>
       </div>
        <img className="w-[130px]" src="https://i.ibb.co/fSFdkrY/courageous-malasada-065d71-netlify-app-book-1.png"></img>
       </div>
       </div>
        <img
          className=" w-[120px] h-[450px]"
          src="https://i.ibb.co/vBYWZQY/courageous-malasada-065d71-netlify-app.png"
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

    </SwiperSlide>
{/* 3 */}
<SwiperSlide>
<div className="w-[600px] h-[500px] shadow-2xl  my-[30px] relative" style={{ border: '2px solid black'}}>
      
      <div
        className="relative flex justify-around items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
      >
       <div >
       <img  className=" w-[400px] h-[200px]" src=" https://i.ibb.co/jGpYfy0/Screenshot-56.png"></img>
       <div className="flex justify-around items-center mt-[50px]">
       <div >
       <img className="w-[170px] mb-[10px]" src="https://i.ibb.co/9Ykvgw3/name-of-your-project-6e4ab-firebaseapp-com-1.png"></img>
       <img className="w-[170px]" src="https://i.ibb.co/WcDyp8J/name-of-your-project-6e4ab-firebaseapp-com-3.png"></img>
       </div>
        <img className="w-[180px]" src="https://i.ibb.co/RTr1VSj/name-of-your-project-6e4ab-firebaseapp-com-4.png"></img>
       </div>
       </div>
        <img
          className=" w-[120px] h-[450px]"
          src="https://i.ibb.co/72hrCcT/name-of-your-project-6e4ab-firebaseapp-com.png"
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

    </SwiperSlide> 
{/* 4 */}

<SwiperSlide>
    <div className="w-[600px] h-[500px] shadow-2xl  my-[30px] relative" style={{ border: '2px solid black'}}>
      
      <div
        className="relative flex justify-around items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
      >
       <div className="mt-[30px]">
       <img  className=" w-[400px] h-[200px]" src="https://i.ibb.co/TRb2Qrc/Screenshot-57.png"></img>
       <div className="flex justify-around items-center mt-[50px]">
        <img className="w-[180px]" src="https://i.ibb.co/y69mkmW/Screenshot-60.png"></img>
        <img className="w-[180px]" src="https://i.ibb.co/pnmJP3g/Screenshot-61.png"></img>
       </div>
       </div>
        <img
          className=" w-[120px] h-[450px]"
          src="https://i.ibb.co/6JdPT3G/assignment9-a6c85-web-app.png"
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
    </SwiperSlide>
    </Swiper>
</div>



{/* contact */}
<div className="mt-[200px] text-center "><Headline ref={conRef}  text="Contact Me" /><img className="mt-[-250px] lg:ml-[600px] md:ml-[220px] sm:ml-[170px]" src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img></div>
<div className="flex justify-around items-center">
 
<div className="grid grid-cols-1 items-start">
  <p className="flex items-center mb-[20px]">
   
    <a href={`mailto:${emailAddress}`} className="ml-[10px] text-[18px] font-b flex items-center">
    <FaEnvelope size={40} color="#FFBF00" style={{border: '2px solid black'}} className="bg-black w-[45px] " />
      {emailAddress}
    </a>
  </p>

  <p className="flex items-center mb-[20px]">
   
    <a href={linkedIn} className="ml-[10px] text-[18px] font-b flex items-center">
    <FaLinkedin size={40} color="#FFBF00" style={{border: '2px solid black'}} className="bg-black w-[45px]"/>
      Nur Nahar Muna
    </a>
  </p>

  <p className="flex items-center mb-[20px]">
   
    <a href={location} target="_blank" rel="noopener noreferrer" className="ml-[10px] text-[18px] font-b flex items-center">
    <FaMapMarkerAlt size={40} color="#FFBF00" style={{border: '2px solid black'}} className="bg-black w-[45px]"/>
      West Bakolia, Chittagong, Bangladesh.
    </a>
  </p>
</div>

<form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 ">
      <label className="">Name</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="text" name="user_name" required/>
      <label>Email</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="email" name="user_email" required/>
      <label>Message</label>
      <textarea className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[100px] my-[20px]" style={{border: '2px solid black'}} name="message" required/>
      <input className="w-[130px] h-[50px] bg-[#FFBF00] lg:ml-[270px] md:ml-[270px] sm:ml-[160px]" style={{border: '2px solid black'}} type="submit" value="Send" />
    </form>
</div>



{/* footer */}
<img className="w-[150px] h-[150px]  mx-auto mt-[100px]" src="https://i.ibb.co/3kg5Ddz/Screenshot-2023-12-12-155942-removebg-preview-1.png"></img>
<div className="w-full h-[210px] bg-black mt-[-60px]">
<footer className="footer footer-center p-10 text-white  rounded ">

  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href={`mailto:${emailAddress}`} className="ml-[10px] text-[18px] font-b flex items-center">
    <FaEnvelope size={40} color="#FFBF00" style={{border: '2px solid black'}} className="bg-black w-[45px]" />
    </a>
    <a href={linkedIn} className="ml-[10px] text-[18px] font-b flex items-center">
    <FaLinkedin size={40} color="#FFBF00" style={{border: '2px solid black'}} className="bg-black w-[45px]"/>
    </a>
    <a href={location} target="_blank" rel="noopener noreferrer" className="ml-[10px] text-[18px] font-b flex items-center">
    <FaMapMarkerAlt size={40} color="#FFBF00" style={{border: '2px solid black'}} className="bg-black w-[45px]"/>
    </a>
      {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by Muna</p>
  </aside>
</footer>
</div>

</div>
        // </div>
    );
};

export default Navbar;