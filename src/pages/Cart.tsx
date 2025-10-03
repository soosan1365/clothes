import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";
import { assets } from "../assets";
import {CartTotal} from "../components";
import type { ShopContextType, productType } from "../type";

type CartItem = { _id: string; size: string; quantity: number };

const Cart: React.FC = () => {
  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { products, currency, updateQuantity, cartItems, navigate } = shop;
  const [cartData, setCartData] = useState<CartItem[]>([]);

  useEffect(() => {
    const tempData: CartItem[] = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <p
          className="  
       text-[19px] pl-2 carttotal border py-1 "
        >
          YOURS<span className="ml-3 ">CART</span>
        </p>
        <div>
          {cartData.map((item) => {
            const productData: productType | undefined = products.find(
              (product) => product._id === item._id
            );
            if (!productData) return null;
            return (
              <div
                key={`${item._id}_${item.size}`}
                className="py-4 border-t border-b  text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 image sm:w-20 "
                    src={productData.image?.[0]}
                    alt=""
                  />
                  <div className="flex flex-col gap-5">
                    <p className="text-xs collection sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex   items-center gap-5 mt-2 text-sm font-bold">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border button bg-slate-50">
                        {item.size}
                      </p>
                    
                    <div className="flex justify-center items-center gap-5">
                       <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="border button hover:border-teal-700 text-lg 
                  font-bold max-w-16
                   sm:max-w-28 px-1 sm:px-2"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt=""
                /></div>
                  </div></div>
                </div>
             
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center my-10">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-Orders")}
                className="add text-sm  my-8 py-3"
              >
                {" "}
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
