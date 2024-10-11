import React from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../ContextApi/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext)


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[100vh] my-0 mx-[170px] mb-[200px]">
      <div className="flex gap-[20px] h-full w-full">
        {/* Container for small images */}
        <div className="flex flex-col gap-[20px] h-full justify-between">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={product.name}
              className="w-[100px] h-[100px] object-cover"
            />
          ))}
        </div>

        {/* Container for big image */}
        <div className="flex items-center justify-center h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] h-[400px] object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="flex flex-col justify-between mx-[70px] my-0 flex-1 h-full">
          <div>
            <h1 className="text-[#3d3d3d] text-[40px] font-bold">{product.name}</h1>
            <div className="flex items-center gap-[10px] mt-[13px] text-[#1c1c1c] text-[20px]">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={star_icon}
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
              ))}
              <img
                src={star_dull_icon}
                alt="star"
                className="w-[20px] h-[20px]"
              />
              <p>{122}</p>
            </div>

            <div className="flex my-[40px] gap-[20px] text-[24px] font-bold">
              <div className="text-[#818181] line-through">${product.old_price}</div>
              <div className="text-[#ff4141]">${product.new_price}</div>
            </div>

            <div>
              A lightweight, easy-to-use, and powerful electric scooter with a long-range
              battery. The E4 is the perfect choice for commuters and leisure riders
              looking for a smooth and comfortable ride.
            </div>
          </div>

          {/* Size selection */}
          <div>
            <h1 className="mt-[55px] text-[#656565] text-[24px] font-semibold">
              Select Size
            </h1>
            <div className="flex gap-[20px] my-[20px]">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div
                  key={size}
                  className="py-[18px] px-[30px] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button className="py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[4Opx] border-none cursor-pointer outline-none " onClick={() => addToCart(product.id)}>
            ADD TO CART
          </button>

          <p className="mt-[10px]">
            <span className="font-semibold">Category :</span> Women, T-Shirt, Crop out
          </p>
          <p className="mt-[10px]">
            <span className="font-semibold">Tags :</span> Modern, Stylish, Comfortable
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
