const fetchProducts = async () => {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Error al obtener productos");
    const data = await response.json();
    console.log("quepasaaaaa");
    return data;
  } catch (error) {
    console.error("Error en fetchProducts:", error);
    return [];
  }
};

export default fetchProducts;
