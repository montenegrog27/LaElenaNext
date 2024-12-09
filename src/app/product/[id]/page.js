import FooterWeb from "@/components/FooterWeb";
import RecommendedProducts from "@/components/RecommendedProducts";
import fetchProduct from "@/lib/fetchProduct";
import Link from "next/link";
import { FaTruckFast } from "react-icons/fa6";

const ProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Producto no encontrado</h1>
        <p>Lo sentimos, no pudimos cargar la información de este producto.</p>
      </div>
    );
  }

  return (
    <>
      <div className="py-6 mt-40 w-full flex flex-col justify-center items-center">
        {/* Breadcrumb */}
        <nav className="text-sm md:w-[80%] 2xl:w-[70%] text-gray-600 flex gap-2 items-center mb-6">
          <Link href="/" className="hover:underline">
            Volver
          </Link>
          <span>/</span>
          <Link href="/griferias" className="hover:underline">
            Griferías
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Griferías para baño</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-10 ">
          {/* Imagenes a la izquierda */}
          <div className="flex flex-row-reverse w-full lg:w-[60%] gap-4">
            <div className="border rounded-md overflow-hidden">
              <img
                src={product.images[0]?.src}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
            {/* Miniaturas */}
            <div className="flex flex-col gap-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Miniatura ${index + 1}`}
                  className="w-24 h-20 object-cover border rounded-md  cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="w-full lg:w-[30%] px-16">
            <h1 className="text-2xl mb-2 text-Titulos font-GothamBold Font-Bold">
              {product.name}
            </h1>
            <h2 className="text-lg text-black font-GothamBold  font-Bold mb-4">
              {product.brand || "Ferrum"}
            </h2>
            <p className="text-2xl font-bold text-black mb-4">
              ${product.price}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              {"Descripción del producto."}
              {"Descripción del producto."}
              {"Descripción del producto."}
              {"Descripción del producto."}
              {"Descripción del producto."}
            </p>

            {/* Controles de cantidad */}
            <div className="flex items-center gap-4 mb-6 justify-between">
              <p className="text-SubtituloH1 font-Bold">Cantidad</p>
              <div className="flex items-center border border-GrisClaro rounded-md">
                <button className="px-2 py-2 text-lg text-GrisClaro">-</button>
                <span className="px-4 text-lg text-GrisClaro">0</span>
                <button className="px-2 text-lg py-2 text-GrisClaro">+</button>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col items-center gap-4">
              <button className="bg-Verde text-white w-full py-3 px-4 rounded-lg hover:bg-green-700">
                Comprar
              </button>
              <button className="bg-Blanco10 font-Bold w-full py-3 shadow-custom-card text-Verde  px-4 rounded-lg hover:bg-gray-300">
                Agregar al carrito
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-6 w-full border-gray-200 border flex flex-row justify-start gap-5 items-center  p-4 rounded-md text-sm">
              <div>
                <FaTruckFast className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <p className="font-bold">Envíos a domicilio</p>
                <p className="text-gray-600">
                  ¡Recibí este producto sin moverte de tu casa!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] 2xl:w-[70%] flex justify-center items-start flex-col gap-10 w-full">
          <div className="text-Titulos mt-10 rounded-xl w-fit border flex border-GrisClaro">
            <div className="rounded-xl bg-Acento flex py-2   px-5">
              Descripction
            </div>
            <div className=" py-2 px-7 text-GrisClaro">Caracteristicas</div>
            <div className=" py-2 px-7 text-GrisClaro">
              Preguntas frecuentes
            </div>
          </div>
          {product.description}
        </div>
      </div>
      <RecommendedProducts />
      <FooterWeb />
    </>
  );
};

export default ProductPage;
