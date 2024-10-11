import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png' 
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
        <div className="flex items-center gap-[20px] justify-center*">
            <img src={footer_logo} alt="logo" className="w-[200px] h-[150px] mx-[40px] my-[40px]" />
            <p className="text-[#383838] text-[46px] font-bold">
                SHOPPER</p>
        </div>
       <ul className="flex gap-[50px] list-none text-[#252525] text-[20px]" >
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Product</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
       </ul>
       <div className="flex gap-[20px]" >
       <div className='p-[10px] pt-[6px] bg-[#fbfbfb] border-[1px] border-[#ebecf0] border-solid'>
        <img src={instagram_icon} alt="instagram" className="w-[30px] h-[30px] mx-[10px]" />
        </div>
         <div className='p-[10px] pt-[6px] bg-[#fbfbfb] border-[1px] border-[#ebecf0] border-solid'>
          <img src={pintester_icon} alt="pintester" className="w-[30px] h-[30px] mx-[10px]" />
          </div>
            <div className='p-[10px] pt-[6px] bg-[#fbfbfb] border-[1px] border-[#ebecf0] border-solid'> 
            <img src={whatsapp_icon} alt="whatsapp" className="w-[30px] h-[30px] mx-[10px]" />
            </div>
            </div>
            <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[20px]">
                <hr className='w-[80%] border-none bg-[#c7c7c7] h-[3px]' />
                <p>Copyright @ 2024 -ALL RIGHT RESERVED</p>
            </div>
    </div>
  )
}

export default Footer