async function testeAsync() {
  console.log("Iniciando");
  let exemplo = await fetch("http://httpbin.org/get");
  console.log(exemplo);
  console.log("Terminou a requisição");
}

function teste() {
  console.log("Iniciando");

  let example = fetch("http://httpbin.org/get")
    .then((res) => {
      console.log("ta aqui dentro");
      console.log(res);
    })
    .catch((res) => {
      console.log("dentro do catch");
      console.log(err);
    });

  console.log(example);

  console.log("Depois da chamada");
}
