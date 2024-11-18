import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.WC_API_URL}/products?category=23`,
      {
        auth: {
          username: process.env.WC_CONSUMER_KEY,
          password: process.env.WC_CONSUMER_SECRET,
        },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return new Response("Error al obtener productos", {
      status: 500,
    });
  }
}
