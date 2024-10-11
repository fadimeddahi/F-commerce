import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../ContextApi/ShopContext'
import nounDropDown from '../components/Assets/noun-drop-down-1123247.png'
import Item from '../components/Items/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='flex flex-col justify-center mx-[100px] my-0'>
      <img src={props.banner} alt="banner" className='block mx-220px my-auto w-[82%]' />
      <div className='flex justify-between items-center mx-0 my-[0px]'>
        <p className='font-semibold'>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='px-[10px] py-[5px] rounded-[40px] border-[1px] border-solid border-[#888888] flex items-center justify-between'>
          Sort by <img src={nounDropDown} alt="drop down" className='w-[20px] h-[20px]' />
        </div>
      </div>
      <div className='mx-[20px] my-[20px] grid grid-cols-4 gap-y-[80px]'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
      <div className='flex justify-center items-center mx-auto my-[50px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] font-medium text-[20px] w-[20%]'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory