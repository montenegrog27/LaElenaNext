import Link from "next/link";

const ProductCard = ({ product }) => {
  // Calcular el porcentaje de descuento
  const discountPercentage = product.sale_price
    ? Math.round(
        ((product.regular_price - product.sale_price) / product.regular_price) *
          100
      )
    : null;

  return (
    <div className="relative flex flex-col">
      {/* Porcentaje de descuento en la esquina superior derecha */}
      {discountPercentage && (
        <div className="absolute z-40 mt-2 right-2 bg-Verde text-white text-PreciosMobile md:text-BodySMobile lg:text-Body font-Body px-2 py-1 rounded-lg">
          -{discountPercentage}% off
        </div>
      )}
      <Link href={`/product/${product.id}`}>
        <div
          className="h-[95%] w-[95%] sm:w-[85%] sm:h-[75%] md:w-[190px] md:h-[95%] lg:w-[250px] lg:h-[90%] 2xl:w-[90%] 2xl:h-[90%]
        border rounded-lg mb-[32px] md:pb-[20px] flex justify-start flex-col hover:translate-y-[1px] 
        hover:cursor-pointer transition-all duration-700 hover:shadow-[4px_20px_15px_2px_rgba(0,0,0,0.15)] shadow-custom-card relative"
        >
          <img
            src={product.images[0]?.src}
            alt={product.name}
            className="w-[100%] h-[70%] max-w-[295px max-h-[250px] md:w-[100%] md:h-[100%] object-cover rounded-t-md"
          />
          <div className="p-[8px] sm:p-3 lg:p-[15px] flex-col justify-center items-center gap-[8px] md:gap-[15px] max-w-[350px] md:min-w-[220px min-h-[130px] sm:min-h-[100px]">
            <p className="text-Acento font-GothamBold text-BottomH2Mobile lg:text-Bottom">
              Marca
            </p>
            <h2 className="mt-1 font-GothamRegular text-BodySMobile lg:text-Body sm:min-h-[60px] lg:min-h-[120px] ">
              {product.name}
            </h2>
            <div className="text-PreciosMobile lg:text-Precios bottom-0 ">
              {/* Verifica si hay un precio con descuento */}
              {product.sale_price ? (
                <div className="flex flex-col">
                  <span className=" md:absolute  lg:-mt-8 2xl:-mt-14  line-through text-gray-500 text-PreciosMobile lg:text-Precios ">
                    ${product.regular_price}
                  </span>
                  <span className="">${product.sale_price}</span>
                </div>
              ) : (
                <span className=" ">${product.price}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

// import Link from "next/link";

// const ProductCard = ({ product }) => {
//   return (
//     <Link href={`/product/${product.id}`}>
//       <div
//         className="h-[90%] w-[95%] sm:w-[85%] sm:h-[75%]  md:w-[190px] md:h-[95%] lg:w-[250px] lg:h-[90%] 2xl:w-[90%] 2xl:h-[90%]
//       border rounded-lg mb-[32px] md:pb-[20px] flex justify-start flex-col hover:translate-y-[1px]
//       hover:cursor-pointer transition-all duration-700 hover:shadow-[4px_20px_15px_2px_rgba(0,0,0,0.15)] shadow-custom-card"
//       >
//         <img
//           src={product.images[0]?.src}
//           alt={product.name}
//           className="w-[100%] h-[70%] max-w-[295px max-h-[250px] md:w-[100%] md:h-[100%] object-cover rounded-t-md"
//         />
//         <div className="p-[8px] sm:p-3 lg:p-[15px] flex-col justify-center items-center gap-[8px] md:gap-[15px] max-w-[350px] md:min-w-[220px  min-h-[130px] sm:min-h-[100px]   ">
//           <p className="text-Acento font-GothamBold text-BottomH2Mobile lg:text-Bottom">
//             Marca
//           </p>
//           <h2 className="mt-1 font-GothamRegular text-BodySMobile lg:text-Body sm:min-h-[60px] lg:min-h-[120px] ">
//             {product.name}
//           </h2>
//           <p className="text-PreciosMobile lg:text-Precios bottom-0">
//             ${product.price}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;
