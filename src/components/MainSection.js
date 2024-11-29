"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchProducts from "@/lib/fetchProducts";
import Image from "next/image";
import Slider from "react-slick";

import portada from "../app/assets/images/portada.png";

const MainSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 5));
    };
    getProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative flex flex-col justify-center items-center ">
      <Image
        src={portada}
        alt="Portada"
        width={"100%"}
        height={"100%"}
        className="h-[216px] md:w-full md:h-auto object-cover"
      />

      <div className="block md:hidden -mt-24 pl-[5%] pr-0 pt-[32px] w-[100%] bg-red-500">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="hidden md:flex px-[16px] md:px-[0px] justify-between md:-mt-40 md:w-[80%] 2xl:w-[70%] ">
          {/* 2xl:bg-blue-500 md:bg-red-500 lg:bg-green-500 */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
