import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[65%] h-[40vh]  px-[0px] py-[150px] mb-[150px] bg-custom-gradient gap[30px] mx-[235px]'>
    <div>
        <h1 className="text-[#454545] text-[35px] font-semibold justify-center items-center">
            GET EXCLUSIVE PFFERS ON YOUR EMAIL</h1>
        <p className="text-[#454545] text-[20px] justify-center items-center flex">
            Subsicribe to our newsletter and stay updated</p>
    </div>
    <div className="flex items-center justify-between bg-white w-[530px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3] border-solid mt-[30px]">
        <input className="w-[100px] ml-[30px] border-0 outline-none text-[#616161]  text-[16px] "  type="email" placeholder="Enter your id" />
        <button className="w-[150px] h-[50px] bg-black text-white cursor-pointer rounded-[80px] text-[20px] " >
            Subsicribe</button>
    </div>
    </div>
    
  )
}

export default NewsLetter