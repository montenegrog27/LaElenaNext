import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg h-auto max-w-36 lg:max-w-56 flex justify-center items-start flex-col my-2 shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform">
      <img
        src={product.images[0]?.src}
        alt={product.name}
        className="w-36 h-36 lg:w-56 lg:h-56 object-cover rounded-t-md"
      />
      <div className="p-2 lg:p-3 max-w-36">
        <p className="text-Acento font-GothamBold text-BottomMobile lg:text-Bottom">
          Marca
        </p>
        <h2 className="mt-1 lg:mt-2 font-GothamRegular text-BodyMobile lg:text-Body">
          {/* {product.name} NO OLVIDARRRRR*/}
          Descripción del producto
        </h2>
        <p className="text-PreciosMobile lg:text-Precios">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
