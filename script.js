const recommendations = {
  plastic: ["Aprovechable", "Una botella plástica limpia y seca suele poder aprovecharse. Verifica las reglas y el contenedor señalizado del campus."],
  paper: ["Aprovechable", "El papel limpio y seco suele ser aprovechable. Evita mezclarlo con residuos húmedos."],
  food: ["Orgánico", "Las cáscaras de fruta son residuos orgánicos cuando existe una ruta de aprovechamiento para ellos."],
  dirty: ["Requiere verificación", "Los empaques sucios o mezclados pueden necesitar un manejo distinto. Consulta la señalización institucional."]
};
document.getElementById("classify").addEventListener("click", () => {
  const key = document.getElementById("waste").value;
  const [category, message] = recommendations[key];
  document.getElementById("result").textContent = category + " — " + message;
});