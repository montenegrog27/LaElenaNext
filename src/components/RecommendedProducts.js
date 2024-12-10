"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchProducts from "@/lib/fetchProducts";
import Slider from "react-slick";

const RecommendedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 5));
    };
    getProducts();
  }, []);

  // carrusel
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className=" py-10 md:py-[50px] w-full  md:pl-[0px]  flex flex-col justify-center items-center">
      <h2 className="md:w-[80%] 2xl:w-[70%] font-GothamBold text-2xl lg:text-Titulos my-5 lg:mt-[20px] text-start w-full pl-[5%] md:pl-0">
        Productos Recomendados
      </h2>

      {/* mobile */}
      <div className="block md:hidden pl-[5%] pr-0 pt-[32px] w-[100%]">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      {/* desktop */}
      <div className="w-full flex justify-center items-center">
        <div className="hidden px-[16px] md:px-[0px] md:flex justify-between md:w-[80%] 2xl:w-[70%]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
