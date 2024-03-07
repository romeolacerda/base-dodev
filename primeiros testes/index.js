// npm install --save-dev jest
// Tu não precisa dos pacotes instalados para produção, por isso sempre instale eles como dependencias de desenvolvimento
//para usr o coverage, mude o script para:"scripts": {"teste": "jest --coverage"}
var calculadora = require("./calculadora.js");

console.log(calculadora.somar(1, 2));
