"use client";
import React, { useEffect, useState } from "react";
import fetchProducts from "@/lib/fetchProducts";
import CategoriesCard from "./CategoriesCard";

const AllCategories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 14));
    };
    getProducts();
  }, []);

  return (
    <div className="relative p-5 lg:px-[100px] py-10">
      <h2 className="font-GothamBold text-Titulos my-10 text-start w-full">
        Todas las categorías
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${index >= 10 ? "col-span-1 md:col-span-1" : ""}`}
          >
            <CategoriesCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
