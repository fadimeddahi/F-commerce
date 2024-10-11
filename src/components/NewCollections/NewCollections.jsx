import React from 'react';
import new_collections from '../Assets/new_collections';
import Item from '../Items/Item';

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh]  mt-[100px] mb-[500px]">
      <h1 className="text-[#171717] text-[40px] font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="mt-[50px]  gap-[30px] grid grid-cols-4  ">
        {new_collections.map((item) => {
          return (
            <Item
              key={item.id}
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

export default NewCollections;
