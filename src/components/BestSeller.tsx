import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  // Use the ShopContext to get the products
  const { products } = useContext(ShopContext);
  // Use the useState hook to manage the best selling products
  const [bestSeller, setBestSeller] = useState([]);

  // Use the useEffect hook to get the 5 most sold products
  useEffect(() => {
    // Filter the products to get the bestseller products
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div>
      <div className="text-center  text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm  md:text-base text-gray-600">
          The bestsellers in our store today
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  ">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
