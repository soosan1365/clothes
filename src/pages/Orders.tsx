import React, { useContext } from "react";
import { ShopContext } from "../context";
import type { ShopContextType, productType } from "../type";

const Orders: React.FC = () => {
  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { products, currency } = shop;

  return (
    <div className="border-t   pt-12">
      <div className="flex  font-medium">
        <p
          className="pb-8 collection 
       text-[1.3rem]"
        >
          DELIVERY<span className="ml-3 ">INFORMATION</span>
        </p>
        <p className=" mt-4  ml-2 line w-8 sm:w-14 h-[1px] sm:h-[2px] bg-gray-700 "></p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {products.slice(1, 4).map((item: productType) => (
          <div
            key={item._id}
            className="py-4  order text-gray-700   md:items-center md:justify-between gap-12"
          >
              <div className="flex items-start gap-6 text-sm">
              <img className="w-16 image sm:w-20" src={item.image?.[0]} alt="" />
              <div>
                <p className="sm:text-base collection  font-medium">
                  {item.name}
                </p>

                <div className="flex item-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>size:M</p>
                </div>
                <p className="">
                  Date:<span className="text-gray-400">25,jul,2024</span>
                </p>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="flex items-center  gap-2">
                <p className=" min-w-2 h-2  mt-2 rounded-full bg-teal-800"></p>
                <p className="text-sm md:text-base   ">Ready to ship</p>
              </div>
              <button className="border mr-16 line  text-sm font-medium  rounded-sm">
                {" "}
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
