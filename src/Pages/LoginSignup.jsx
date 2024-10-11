import React from 'react';

const LoginSignup = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#fce3fe] flex items-center justify-center py-[50px]'>
        <div className='w-[580px] bg-white py-[50px] px-[50px] my-[50px] h-[100%]'>
          <h1 className='mb-[20px]'>Sign up</h1>
          <div className='flex flex-col gap-[30px] mt-[20px]'>
            <input type="text" placeholder="Full Name" className="border border-gray-300 pl-[20px] h-[80px] w-[100%] outline-none text-[#787878] text-[20px]" />
            <input type="email" placeholder="Email" className="border border-gray-300 pl-[20px] h-[72px] w-[100%] outline-none text-[#787878] text-[20px]" />
            <input type="password" placeholder="Password" className="border border-gray-300 pl-[20px] h-[72px] w-[100%] outline-none text-[#787878] text-[20px]" />
          </div>
          <button className="w-[100%] h-[80px] bg-[#ff4141] text-white text-[20px] font-medium mt-[20px] cursor-pointer">
            Continue</button>
          <p className="mt-[20px] text-[#5c5c5c] text-[20px] font-medium">
            Already have an account ? <span className="text-[#ff4141] cursor-pointer">Login</span>
          </p>
          <div className="mb-[10px] flex items-center mt-[20px] gap-[20px] text-[#5c5c5c] text-[20px] font-medium">
            <input type="checkbox" className="mr-[10px]" />
            <p className="text-[#5c5c5c] text-[20px] font-medium">By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>
    </div>
  );
}

export default LoginSignup;