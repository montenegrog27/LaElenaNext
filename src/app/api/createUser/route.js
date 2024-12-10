import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    console.log("crear usuario con ", email);
    if (!email) {
      return new Response(
        "Se requiere un correo electrónico para crear el cliente",
        { status: 400 }
      );
    }

    console.log("la url", `${process.env.WP_SITE_ID}/users`);
    const userToCreate = {
      email,
      username: email,
      password: "User123456",
      roles: ["customer"],
    };

    // realiza la solicitud POST a WordPress
    const newUserResponse = await axios.post(
      `${process.env.WP_SITE_ID}/users`,
      userToCreate,
      {
        auth: {
          username: process.env.WC_CONSUMER_KEY,
          password: process.env.WC_CONSUMER_SECRET,
        },
      }
    );

    console.log("Usuario creado en WP con éxito:", newUserResponse.data);

    return new Response(JSON.stringify({ userCreated: newUserResponse.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error en el endpoint /api/createUser:", {
      message: error.message,
      response: error.response ? error.response.data : null,
      status: error.response ? error.response.status : null,
    });

    return new Response(
      JSON.stringify({
        userCreated: false,
        error: error.response?.data || "Error al procesar la solicitud",
      }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
