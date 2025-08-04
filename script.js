const horario = {
  "08:15 - 09:35": ["", "", "", "", ""],
  "09:45 - 11:05": ["", "", "", "", ""],
  "11:15 - 12:35": ["", "", "", "", ""],
  "13:10 - 14:10": ["", "", "", "", ""],
  "14:30 - 15:50": ["", "", "", "", ""],
  "16:00 - 17:20": ["", "", "", "", ""],
  "17:30 - 18:50": ["", "", "", "", ""],
  "19:00 - 20:20": ["", "", "", "", ""]
};

// Asignaturas por bloque [Lunes, Martes, Miércoles, Jueves, Viernes]
horario["08:15 - 09:35"] = ["", "", "", "", "Computación (comp)"];
horario["09:45 - 11:05"] = ["Matemáticas (mat)", "Bioquímica (bioq)", "Matemáticas (mat)", "Fisiología (fisio)", "Computación Lab (comp-lab)"];
horario["11:15 - 12:35"] = ["Matemáticas (mat)", "Bioquímica Lab (bioq-lab)", "Matemáticas (mat)", "Fisiología (fisio)", ""];
horario["13:10 - 14:10"] = ["", "BREAK", "", "BREAK", ""];
horario["14:30 - 15:50"] = ["Computación Lab (comp-lab)", "Fundamentos del Cuerpo Humano Lab (fisio)", "", "Metrología (metro)", ""];
horario["16:00 - 17:20"] = ["Computación Lab (comp-lab)", "Fundamentos del Cuerpo Humano Lab (fisio)", "", "Metrología (metro)", ""];
horario["17:30 - 18:50"] = ["", "Anatomía (anat)", "", "", ""];
horario["19:00 - 20:20"] = ["", "", "", "", "Deporte (deporte)"];

// Renderización
const tbody = document.getElementById("schedule-body");

Object.entries(horario).forEach(([hora, bloques]) => {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = hora;
  tr.appendChild(th);

  bloques.forEach(texto => {
    const td = document.createElement("td");
    if (texto) {
      const match = texto.match(/\((.*?)\)/);
      const clase = match ? match[1] : "";
      td.className = clase;
      td.textContent = texto.replace(/\s?\(.*?\)/, "");
    } else {
      td.className = "vacio";
      td.textContent = "";
    }
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});
