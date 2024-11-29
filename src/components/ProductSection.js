import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import wooCommerceAPI from "@/lib/wooCommerceAPI";

const ProductSection = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await wooCommerceAPI.get(`/product/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error al obtener el producto:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <img
        src={product.images[0]?.src}
        alt={product.name}
        className="w-full h-auto object-cover"
      />
      <p className="text-lg mt-4">{product.description}</p>
      <p className="text-lg font-bold mt-2">Precio: ${product.price}</p>
    </div>
  );
};

export default ProductSection;
