import React from 'react';
import data_product from '../Assets/data';
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] w-[65%] m-auto mt-[100px] mb-[150px]">
      <h1 className="text-[#171717] text-[40px] font-semibold">MOST
        POPULAR IN WOMEN</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="mt-[50px] flex gap-[30px]" >
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}  // Use item.id for the key instead of i
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
