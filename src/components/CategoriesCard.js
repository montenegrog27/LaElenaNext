import React from "react";

const CategoriesCard = ({ product }) => {
  return (
    <img
      src={product.images[0]?.src}
      alt={product.name}
      className="w-[104px] h-[104px] md:w-[232px] md:h-[232px] object-cover rounded-lg shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform"
    />
  );
};

export default CategoriesCard;
