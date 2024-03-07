const economia = require("./economia");

test("Gasolina e 100 km", () => {
  expect(economia.desempenho(160, "gasolina")).toBe(10);
});

test("Gasolina e -100 km", () => {
  expect(economia.desempenho(-100, "gasolina")).toBe(false);
});

test("Gasolina e 100 km", () => {
  expect(economia.desempenho(100, "aditivada")).toBe(false);
});

test("Etanol e 110 km", () => {
  expect(economia.desempenho(110, "etanol")).toBe(10);
});
