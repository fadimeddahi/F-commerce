import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  // Ensure product exists before rendering
  if (!product) {
    return null;  // or show a loading message or placeholder
  }

  return (
    <div className='flex gap-[10px] text-[#5e5e5e] text-[16px] my-[60px] mx-[170px] font-semibold capitalize'>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP 
      <img src={arrow_icon} alt="arrow" /> {product.category} 
      <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default Breadcrum;
