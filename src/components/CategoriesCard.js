import React from "react";
import Image from "next/image";

const CategoriesCard = ({ product }) => {
  return (
    <div className="relative w-[95px] h-[95px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] 2xl:w-[232px] 2xl:h-[232px] rounded-lg overflow-hidden ">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={product.images[0]?.src}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute flex justify-center p-7 items-center inset-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 hover:opacity-80 z-10">
          <h1 className="z-20 text-white">{product.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
