import React from 'react';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className='h-[100vh] bg-custom-gradient flex '>
      {/* Main content section */}
      <div className='flex-1 flex flex-col justify-center gap-[1rem] pl-[180px] leading-[1.1]'>
        <h2 className='font-semibold text-[1.5rem] text-[#090909] '>
          New Arrivals Only
        </h2>

        <div>
          <div className='flex items-center gap-[1.5rem] '>
            <p className='text-[#171717] text-[70px] font-semibold '>
              New
            </p>
            <img className='w-[105px]' src={hand_icon} alt="hand icon" />
          </div>

          <div>
            <p className='text-[#171717] text-[70px] font-semibold'>Collections</p>
            <p className='text-[#171717] text-[70px] font-semibold'>For Everybody</p>
          </div>

          <div className='flex items-center justify-center gap-[1rem] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[1.5rem] font-semibold cursor-pointer hover:scale-[1.05] transition-transform duration-600'>
            <p>Latest Collections</p>
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>
      </div>

      {/* Separate div for the hero image */}
      <div className='flex-1 flex justify-center items-center'>
        <img src={hero_image} alt="hero image" className='w-[80%]' />
      </div>
    </div>
  );
}

export default Hero;
