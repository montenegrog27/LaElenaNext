"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchProducts from "@/lib/fetchProducts"; // Asegúrate de importar correctamente

const RecommendedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 5)); // Esto es solo un ejemplo, ajusta según lo que necesites
    };
    getProducts();
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center px-48 py-10">
      <h2 className="font-GothamBold text-Titulos my-10 text-start w-full">
        Productos Recomendados
      </h2>
      <div className="flex justify-center gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
