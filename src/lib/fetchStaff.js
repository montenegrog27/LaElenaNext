const fetchProducts = async () => {
  try {
    const response = await fetch("/api/staff");
    if (!response.ok) throw new Error("Error al obtener productos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en fetchProducts:", error);
    return [];
  }
};

export default fetchProducts;
