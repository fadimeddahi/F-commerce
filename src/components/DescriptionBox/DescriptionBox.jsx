import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[170px]' >
        <div className='flex'>
            <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-solid border-[#d0d0d0]'>

                Description</div>
            <div className='text-[#555] bg-[#FBFBFB] justify-center items-center flex'>
                Reviews</div>
        </div>
        <div className='flex flex-col gap-[20px] border border-solid border-[#d0d0d0] p-[48px] pb-[70px]'>
            <p>
                An e-cpmmerce website is an online platform that faciliting
                buying and selling of products or services over the internet 
                serves as a virtual marketplace where businesses and individuals
                showcase their products. interact with customers , and conductive
                transaction without the need for a physical presence . E-commerce 
                websites have gained imense popularity due to their convenir
                accessibility , and the global reach they offer 
            </p>
            <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero necessitatibus blanditiis fugit consequuntur possimus. Iusto ipsa rerum veniam dolorem officia nihil corporis error corrupti placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox