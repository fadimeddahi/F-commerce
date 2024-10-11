import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../ContextApi/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = React.useState("shop");
  const {getTotalCartItem} = useContext(ShopContext)

  return (
    <div className="flex p-4 shadow-[0_1px_3px_-2px_black] justify-around font-sans">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" />
        <p className="text-[38px] font-sans" style={{ color: '#171717' }}>
          SHOPPER
        </p>
      </div>
      <ul className="flex gap-12 items-center list-none text-[20px] font-sans" style={{ color: '#626262' }}>
        <li onClick={() => setMenu("shop")} className="flex-col items-center gap-[5px] cursor-pointer">
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" ? <hr className="border-none h-[2px] w-[80%] bg-[#FF4141] radius-[10px]" /> : null}
        </li>
        <li onClick={() => setMenu("men")} className="flex-col items-center gap-[5px] cursor-pointer">
          <Link to='/men' style={{ textDecoration: 'none' }}>Men</Link>
          {menu === "men" ? <hr className="border-none h-[2px] w-[80%] bg-[#FF4141] radius-[10px]" /> : null}
        </li>
        <li onClick={() => setMenu("women")} className="flex-col items-center gap-[5px] cursor-pointer">
          <Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>
          {menu === "women" ? <hr className="border-none h-[2px] w-[80%] bg-[#FF4141] radius-[10px]" /> : null}
        </li>
        <li onClick={() => setMenu("kids")} className="flex-col items-center gap-[5px] cursor-pointer">
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
          {menu === "kids" ? <hr className="border-none h-[2px] w-[80%] bg-[#FF4141] radius-[10px]" /> : null}
        </li>
      </ul>
      <div className="flex items-center gap-[45px]">
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <button className="relative outline-none border-[1px] bg-white rounded-[75px] text-[20px] font-sans text-[#515151] border-[#7a7a7a] w-[157px] h-12 px-4 active:bg-[#f3f3f3]">Login</button>
        </Link>
        <Link to='/card' style={{ textDecoration: 'none' }}>
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-white bg-red-500 text-[12px]">
          {getTotalCartItem()}
        </div>
      </div>
    </div>
  );
};

