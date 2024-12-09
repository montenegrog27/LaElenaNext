import axios from "axios";

export async function POST(request) {
  try {
    const body = await request.json(); // Datos enviados desde el cliente
    const { userId, name, lastName, email, phone, birthDate } = body;

    if (!userId || !email) {
      return new Response("Faltan parámetros requeridos", { status: 400 });
    }

    // Configurar los datos de actualización
    const updatedData = {
      user_id: userId,
      first_name: name,
      last_name: lastName,
      email,
      phone,
      birth_date: birthDate,
    };

    // Hacer la solicitud al endpoint personalizado con el token OAuth2
    const response = await axios.post(
      `https://laelena.selftechagency.net/wp-json/custom-api/v1/update-user`, // URL de tu API
      updatedData,
      {
        headers: {
          Authorization: `Bearer jL4I1yKt928LaCHU9LxrJNEvBxur0p3gyO7YX1Sr`, // Aquí colocas el token de acceso
          "Content-Type": "application/json",
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error(
      "Error al actualizar usuario:",
      error.response?.data || error.message
    );
    return new Response("Error al actualizar usuario", { status: 500 });
  }
}
