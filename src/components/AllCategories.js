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
    <div className="relative px-[5%] md:p-0 w-full py-10 flex justify-center items-center bg-green-500 sm:bg-orange-400 md:bg-blue-500 lg:bg-red-500 2xl:bg-yellow-400 ">
      <div className=" bg-red-800 w-full md:w-[80%] 2xl:w-[70%]">
        <h2 className="font-GothamBold text-Titulos my-10 text-start w-full">
          Todas las categorías
        </h2>
        {/* Grid container for responsiveness */}
        <div className="grid grid-cols-3 gap-5 lg:grid-cols-5">
          {products.map((product, index) => (
            <div key={product.id}>
              <CategoriesCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
