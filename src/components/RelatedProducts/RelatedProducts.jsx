import React from 'react'
import data_products from '../Assets/data'
import Item from '../Items/Item'
const RelatedProducts = () => {
  return (
    <div className='flex flex-col gap-[10px] items-center h-[90vh]'>
        <h1 className='text-[#171717] text-[50px] font-semibold'>
            Related products</h1>
        <hr className='w-[200px] h-[6px] bg-[#252525] rounded-[10px]'
         />
        <div className='mt-[50px] flex gap-[30px]'>
            {data_products.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts