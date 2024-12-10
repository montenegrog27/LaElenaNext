import axios from "axios";

export async function POST(req) {
  const { email } = await req.json(); // Obtener el email desde el cuerpo de la solicitud
  console.log("Email del usuario:", email);

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Se requiere un correo electrónico" }),
      { status: 400 }
    );
  }

  try {
    const response = await axios.post(
      "https://laelena.selftechagency.net/wp-json/jwt-auth/v1/token",
      {
        username: email,
        password: "User123456", // Asegúrate de que la contraseña sea correcta
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Si es necesario
      }
    );

    console.log("Respuesta luego de crear token:", response);

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al crear token:", error);
    return new Response("Error al crear token", {
      status: 500,
    });
  }
}
