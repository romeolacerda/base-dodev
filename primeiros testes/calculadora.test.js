const calculadora = require("./calculadora");

test("soma um mais um é igual a dois", () => {
  expect(calculadora.somar(1, 2)).toBe(3);
});
test("soma um mais um é igual a dois", () => {
  expect(calculadora.subtrair(2, 2)).toBe(0);
});
test("soma um mais um é igual a dois", () => {
  expect(calculadora.dividir(2, 2)).toBe(1);
});
test("soma um mais um é igual a dois", () => {
  expect(calculadora.multiplicar(1, 2)).toBe(2);
});
