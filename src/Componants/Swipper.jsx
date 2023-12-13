import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Swipper = () => {
    return (
        <div>
            <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[500px]"
      >
        <SwiperSlide>
          <img className='w-[500px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[500px]' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[500px]' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper> 
        </div>
    );
};

export default Swipper;


{/* <div >

<div className="hero h-[650px] w-[500px] mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/QvNyfGX/Untitled-design-2.png)'}}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center ">
<div className="flex justify-around items-center">
<div>
<p className='text-[40px] '>Hello , I am Nur Nahar Muna </p>
    <p>Junior Web Developer</p>
    <p></p>
    <button className='btn'>Download CV</button>
</div>
<div>
<img className="mt-[30px]" src="https://i.ibb.co/PC6yn86/406269838-1025738658692930-116725294642450228-n-removebg-preview.png"></img>
</div>
</div>
</div>
</div>



    <p className='text-[40px] '>Hello , I am Nur Nahar Muna </p>
    <p>Junior Web Developer</p>
    <p></p>
    <button className='btn'>Download CV</button>
 </div> */}









 <div className="flex justify-center items-center">
 <div className="mr-[-20px]">
 <p className="text-[55px] text-black  font-a">Hi , This Is <span className="text-[#FFBF00] " style={{ textDecoration: 'underline', textDecorationColor: 'black'}}>Muna</span></p>
<p className="text-[20px] font-b my-[15px]">Working As A Junior Web Developer</p>
{/* <p className="font-b text-[18px]">Aspiring software engineer on a journey through the MERN stack. Skilled in React, Node.js and<br/> MongoDB. Turning concepts into robust web solutions .</p>
<button className='w-[150px] h-[50px] mt-[50px] bg-[#FFBF00] hover:bg-white text-[18px] text-black' style={{border: '3px solid black'}}>Download CV</button> */}
 </div>
 <div>
     <img className="w-[400px]" src="https://i.ibb.co/bdc03fs/Untitled-design-8.png"></img>
 </div>
</div>