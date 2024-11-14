import React from "react";

const CategoriesCard = ({ product }) => {
  return (
    <img
      src={product.images[0]?.src}
      alt={product.name}
      className="w-36 h-36 object-cover rounded-lg shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform"
    />
  );
};

export default CategoriesCard;
