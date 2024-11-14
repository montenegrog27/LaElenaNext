"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchProducts from "@/lib/fetchProducts"; // Asegúrate de importar correctamente

import portada from "../app/assets/images/portada.png";
import Image from "next/image";

const MainSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 5)); // Esto es solo un ejemplo, ajusta según lo que necesites
    };
    getProducts();
  }, []);

  return (
    <div className="relative">
      <Image
        src={portada}
        alt="Portada"
        width={"100%"}
        height={500}
        className="w-full h-auto"
      />
      <div className="flex justify-center gap-4 -mt-52">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
