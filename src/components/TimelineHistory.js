import React from "react";
import TimelineEvent from "./TimelineEvent";
import misionVision from "../app/assets/images/misionVision.png";

function TimelineHistory() {
  const timelineData = [
    {
      year: "1924",
      title: "Con un ladrillo comienza esta historia",
      content:
        "Todo comenzó en 1924 con un simple ladrillo. Don Augusto Bertolucci, un inmigrante italiano oriundo de Udine, llegó a Argentina huyendo de la guerra...",
    },
    {
      year: "1943",
      title: "Ladrillo a ladrillo",
      content:
        "Don Augusto se muda a un barrio moderno y trabajaba allí como peón hasta que logró comprar dos hectáreas de campo. En los años siguientes...",
    },
    {
      year: "1945",
      title: "Somos parte de la historia de Rosario",
      content:
        "En 1943, La Elena S.A. ya había dejado su huella al ser la proveedora de ladrillos para la construcción original del Monumento Nacional a la Bandera...",
    },
    {
      year: "1948",
      title: "El inicio de nuestro predio actual",
      content:
        "En 1948, cuando Don Remo tenía tan solo 13 años, La Elena S.A. adquirió el terreno ubicado en la intersección de Avenida Presidente Perón...",
    },
    {
      year: "1965",
      title: "En continuo crecimiento",
      content:
        "Mientras los hornos de ladrillos continuaban produciendo, La Elena S.A. se adentró en el comercio de leña y carbón, adquiriendo terrenos...",
    },
    {
      year: "1980",
      title: "El inicio de nuestro predio actual",
      content:
        "Además de continuar con la expansión de sus instalaciones, incorporación de maquinaria y optimización de procesos...",
    },
    {
      year: "2024",
      title: "Un siglo de historia",
      content:
        "En 2024, La Elena S.A. celebra un siglo de trayectoria ininterrumpida. Un siglo marcado por la pasión por la construcción...",
    },
  ];

  return (
    <div className="space-y-20">
      {timelineData.map((event, index) => (
        <TimelineEvent
          key={index}
          year={event.year}
          title={event.title}
          content={event.content}
          image={misionVision}
        />
      ))}
    </div>
  );
}

export default TimelineHistory;
