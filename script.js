const schedule = [
  { time: "08:00 - 09:30", Lunes: "", Martes: "Anatomía", Miércoles: "Matemáticas", Jueves: "", Viernes: "" },
  { time: "09:40 - 11:10", Lunes: "Matemáticas", Martes: "Anatomía Lab", Miércoles: "Matemáticas", Jueves: "Función Cuerpo Humano", Viernes: "" },
  { time: "11:20 - 12:50", Lunes: "Deporte", Martes: "Bioquímica", Miércoles: "", Jueves: "Función Cuerpo Humano", Viernes: "" },
  { time: "13:10 - 14:10", Lunes: "Ventana", Martes: "Ventana", Miércoles: "Ventana", Jueves: "Ventana", Viernes: "Ventana" },
  { time: "14:30 - 16:00", Lunes: "", Martes: "Metrología", Miércoles: "", Jueves: "", Viernes: "" },
  { time: "16:10 - 17:40", Lunes: "", Martes: "Metrología", Miércoles: "", Jueves: "", Viernes: "" },
  { time: "17:50 - 19:20", Lunes: "", Martes: "", Miércoles: "", Jueves: "", Viernes: "" },
  { time: "19:30 - 21:00", Lunes: "", Martes: "", Miércoles: "", Jueves: "", Viernes: "" }
];

const cellClass = {
  "Matemáticas": "math",
  "Matemáticas Lab": "math-lab",
  "Anatomía": "anatomy",
  "Anatomía Lab": "anatomy-lab",
  "Bioquímica": "bioq",
  "Bioquímica Lab": "bioq-lab",
  "Función Cuerpo Humano": "fisio",
  "Función Cuerpo Humano Lab": "fisio-lab",
  "Metrología": "metrologia",
  "Deporte": "deporte",
  "Ventana": "ventana"
};

const tbody = document.getElementById("schedule-body");

schedule.forEach(row => {
  const tr = document.createElement("tr");
  const timeCell = document.createElement("td");
  timeCell.textContent = row.time;
  tr.appendChild(timeCell);

  ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].forEach(day => {
    const td = document.createElement("td");
    const subject = row[day];
    td.textContent = subject;

    if (subject && cellClass[subject]) {
      td.className = cellClass[subject];
    }

    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});
