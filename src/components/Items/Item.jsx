import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props ) => {
  return (
    <div className="w-[250px] transition duration-600 ease-in-out transform hover:scale-105" >
      <Link to={`/product/${props.id}`} >
        <img src={props.image} alt="item" onClick={window.scrollTo(0, 0)} className="w-[250px] h-[250px] object-cover" />
        </Link>
        <p className="my-[6px] ">
            {props.name}</p>
        <div className="flex gap-[20px]" >
            <div className="text-[#374151] text-[20px] font-semibold" >
                ${props.new_price}
            </div>
            <div className="text-[#8c8c8c] text-[20px] font-semibold line-through" >
                ${props.old_price}
                </div>
        </div>
    </div>
  )
}

export default Item