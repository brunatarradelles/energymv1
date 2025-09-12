const rutinas = {
  perder_peso: {
    casa: [
      "Jumping jacks - 3x30s",
      "Sentadillas - 3x15",
      "Burpees - 3x10",
      "Plancha - 3x30s"
    ],
    gimnasio: [
      "Cinta de correr - 20 minutos",
      "Bicicleta estática - 15 minutos",
      "Circuito HIIT - 3 rondas",
      "Abdominales en máquina - 3x20"
    ]
  },
  ganar_masa: {
    casa: [
      "Flexiones - 4x12",
      "Zancadas - 4x10 por pierna",
      "Fondos en silla - 3x15",
      "Planchas laterales - 3x30s"
    ],
    gimnasio: [
      "Press de banca - 4x10",
      "Sentadillas con barra - 4x8",
      "Peso muerto - 4x6",
      "Dominadas - 3xMax"
    ]
  },
  tonificar: {
    casa: [
      "Yoga - 20 minutos",
      "Pilates - 15 minutos",
      "Plancha - 3x1 minuto",
      "Sentadillas isométricas - 3x30s"
    ],
    gimnasio: [
      "Elíptica - 20 minutos",
      "Máquina de abductores - 3x15",
      "Tríceps polea - 3x12",
      "Estiramientos - 10 minutos"
    ]
  }
};

function mostrarRutina() {
  const objetivo = document.getElementById("objetivo").value;
  const lugar = document.getElementById("lugar").value;
  const rutinaDiv = document.getElementById("rutina");

  if (!objetivo || !lugar) {
    rutinaDiv.innerHTML = "<p style='color:red;'>Por favor selecciona ambos campos.</p>";
    return;
  }

  const ejercicios = rutinas[objetivo][lugar];

  rutinaDiv.innerHTML = `
    <h2>Tu rutina para ${formatearTexto(objetivo)} (${lugar})</h2>
    <ul>
      ${ejercicios.map(ej => `<li>${ej}</li>`).join("")}
    </ul>
  `;
}

function formatearTexto(texto) {
  switch(texto) {
    case "perder_peso": return "Perder peso";
    case "ganar_masa": return "Ganar masa muscular";
    case "tonificar": return "Tonificar";
    default: return texto;
  }
}
