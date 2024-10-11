import React, { useContext } from 'react';
import { ShopContext } from '../../ContextApi/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart ,  gettotalAmount } = useContext(ShopContext);

  return (
    <div className='my-[100px] mx-[170px]'>
      <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-[50px] items-center py-[20px] px-0 text-[#454545] text-[18px] font-semibold'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-[3px] bg-[#e2e2e2] border-none' />
     
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-[50px] items-center py-[20px] px-0 text-[#454545] text-[18px] font-semibold'>
                  <img src={e.image} alt={e.name} className='h-[62px]'/>
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button>{cartItems[e.id]}</button>
                  <p className='w-[64px] h-[50px] border-[2px] border-solid text-[#ebebeb] bg-[#fff] flex justify-center items-center'>
                    ${e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    alt="remove"
                    onClick={() => removeFromCart(e.id)}
                    className='w-[15px] my-0 mx-[40px] cursor-pointer'
                  />
                </div>
                <hr />
              </div>
            );
          } else {
            return null;
          }
        })}
      <div className='flex my-[100px] mx-0'>
        <div className='flex-1 flex-col my-[20px] gap[40px] mx-[100px]'>
          <h1>cart Total</h1>
          <p> 
          </p>
          <div>
            <div className='flex justify-between py-[15px] px-0'>
              <p>Subtatal</p>
              <p>${ gettotalAmount()}</p>
            </div>
            <hr />
            <div>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          
          </div>
          <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer'>
            PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1 text-[16px] font-medium'>
          <p className='text-[#555]'
          >if you have a promo code , Enter it here</p>
          <div className='w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex'>
            <input type="text" placeholder='promo_code' className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]'/>
            <button className='w-[170px] h-[58px] text-[16px] bg-black text-[white] cursor-pointer'
            >Submit</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default CartItems;
