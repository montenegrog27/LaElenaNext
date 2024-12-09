const fetchProduct = async (id) => {
  try {
    const baseURL =
      typeof window === "undefined" ? process.env.NEXT_PUBLIC_SITE_URL : "";

    const response = await fetch(`${baseURL}/api/product/${id}`);
    if (!response.ok) throw new Error("Error al obtener el producto");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en fetchProduct:", error);
    return null;
  }
};

export default fetchProduct;
