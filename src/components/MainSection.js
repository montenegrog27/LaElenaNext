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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative">
      <Image
        src={portada}
        alt="Portada"
        width={"100%"}
        height={500}
        className="w-full h-auto"
      />

      <div className="block lg:hidden -mt-24 pl-3">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden lg:flex justify-center lg:gap-4 lg:-mt-52">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
