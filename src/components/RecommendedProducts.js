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
    <div className=" py-10 md:py-[50px] w-full pl-[16px] md:px-[100px]">
      <h2 className=" font-GothamBold text-2xl lg:text-Titulos my-5 lg:mt-[20px] text-start w-full pl-3 md:pl-0">
        Productos Recomendados
      </h2>

      {/* mobile */}
      <div className="block lg:hidden pl-[16px] pt-[32px] ">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      {/* desktop */}
      <div className="hidden md:flex justify-between ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
