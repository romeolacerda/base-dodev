function desempenho(distancia, combustivel) {
  if (distancia < 0) return false;
  //   if (combustivel !== ("gasolina" || "etanol")) return false;
  if (!["gasolina", "etanol"].includes(combustivel)) return false;
  if (combustivel === "gasolina") return parseInt(distancia / 16);
  if (combustivel === "etanol") return parseInt(distancia / 11);
}

module.exports = { desempenho };
