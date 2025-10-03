import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  //useState for geting the data of the product
  const [productData, setProductData] = useState(false);
  // useState for getting the image of the product
  const [image, setImage] = useState("");
  //useState for getting the size of the product
  const [size, setSize] = useState("");
  //maping through the products to find the product by id
  // and then calling setPoroductData for get the data of the product
  // and setImage for get the image of the product

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  //this function is called when the productId is changed
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*............. Product data................ */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ..............product images............. */}
        <div className="flex-1 flex flex-col-reverse gap-3  sm:flex-row">
          <div className=" flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {
              // mapping  through image property in productData variable
              productData.image.map((item, index) => (
                // and get the images and show them by src attribute in img tag
                // then when clicked on the image then set the image property to that
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full  image rounded-xl sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))
            }
          </div>
          {/* ..............product image[0] ...........*/}
          <div className="w-full sm:w-[80%]">
            {/* show main image that set in index 0    */}
            <img
              className="w-full image rounded-xl h-auto"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* .............product Info............... */}
        <div className="flex-1">
          <h1
            className="line 
           font-medium text-2xl info mt-2 "
          >
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5 " />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div>
            <p className="text-xl mb-2">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`title  border-2 border-gray-400 rounded-lg py-2 px-4 ${
                    item === size ? "bg-teal-900   " : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className=" bg-teal-950  shadow-gray-900  shadow-md rounded-md
           text-white mt-6 px-8 py-3 text-md active:bg-gray-400 "
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
          </div>
        </div>
      </div>
      {/* .........Display related products */}
      <div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
