

const Banner = () => {
    return (
     
      // <div className=" bg-[#FFFDD0]">
      <div className="w-[1500px] h-[700px]  mx-auto bg-white" style={{border: '3px solid black'}}>
          <div className="flex justify-between items-center ">
             <div className="ml-[80px]" >
           <p className="text-[55px] text-black  font-a">Hello , I am <span className="text-[#FFBF00] " style={{ textDecoration: 'underline', textDecorationColor: 'black'}}>Muna</span></p>
           <p className="text-[20px] font-b my-[15px]">Working As A Junior Web Developer</p>
           <p className="font-b text-[18px]">Aspiring software engineer on a journey through the MERN stack. Skilled in React, Node.js and<br/> MongoDB. Turning concepts into robust web solutions .</p>
           <button className='w-[150px] h-[50px] mt-[50px] bg-[#FFBF00] hover:bg-white text-[18px] text-black' style={{border: '3px solid black'}}>Download CV</button>
           </div>
            <div>
              <img className="w-[600px] h-[600px] mt-[95px]" src="https://i.ibb.co/NN1Qs1w/Untitled-design-6.png"></img>
            </div>
           
        </div>
        </div>
        // </div>
    );
};

export default Banner;