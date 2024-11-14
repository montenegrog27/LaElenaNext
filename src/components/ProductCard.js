import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg h-auto max-w-56 flex justify-center items-start flex-col shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform">
      <img
        src={product.images[0]?.src}
        alt={product.name}
        className="w-56 h-56 object-cover rounded-t-md"
      />
      <div className="p-3">
        <p className="text-Acento font-GothamBold text-Bottom">Marca</p>
        <h2 className="mt-2 font-GothamRegular text-Body">{product.name}</h2>
        <p className="text-Precios">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
