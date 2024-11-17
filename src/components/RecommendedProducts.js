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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="lg:px-48 py-10 w-full">
      <h2 className="font-GothamBold text-2xl lg:text-Titulos my-5 lg:my-10 text-start w-full pl-3">
        Productos Recomendados
      </h2>

      {/* mobile */}
      <div className="block lg:hidden pl-3 ">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex justify-center gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
