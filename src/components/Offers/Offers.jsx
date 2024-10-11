import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className=" h-[60vh] flex m-[50px] py-0 px-[140px] mt-[100px] mb-[150px] bg-custom-gradient overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[60px] font-semibold">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-[60px] font-semibold">
          Offers for you
        </h1>
        <p className="text-[#171717] text-[30px] font-semibold">
          ONLY ON BEST SELLER PRODUCTS
        </p>
        <button className="w-[310px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[1.5rem] font-semibold mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-end items-center pt-[50px]">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
