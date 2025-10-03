import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

import ProductItem from "./ProductItem";

const LatestCollection = () => {
  //catch products from shopcontext
  const { products } = useContext(ShopContext);
  //use useState to create a new instance of the current state object and store it
  const [latestProducts, setLatestProducts] = useState([]);
  // use useEfect for get just 10 products
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="">
      <div className="text-center py-5  text-3xl  ">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm  md:text-base text-gray-600">
          The latest collection of special clothes for your tomorrow look
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6">
        {/*  map into latestProducts for show  latest Products*/}
        {latestProducts.map((item, index) => (
          // call the function ProductItem and path props to get latest products
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
