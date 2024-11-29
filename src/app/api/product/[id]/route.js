import wooCommerceAPI from "../../../../lib/wooCommerceAPI";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await wooCommerceAPI.get(`/products/${id}`);
    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al obtener el producto:", error.message);
    return new Response("Error al obtener el producto", {
      status: 500,
    });
  }
}
