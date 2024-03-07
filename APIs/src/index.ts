//Crie uma classe conforme o diagrama, esta classe não precisa estar com as propriedades encapsuladas porém precisa de um construtor!

//Depois disso o desafio é implementar as APIs: GET, GET by id, POST, PUT, DELETE no código usando o typscript.

class Product {
  Marca: string;
  Modelo: string;
  Categoria: string;
  Ano: number;
  Quilometragem: number;
  Valor: number;

  constructor(
    Marca: string,
    Modelo: string,
    Categoria: string,
    Ano: number,
    Quilometragem: number,
    Valor: number
  ) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Categoria = Categoria;
    this.Ano = Ano;
    this.Quilometragem = Quilometragem;
    this.Valor = Valor;
  }
}

const apiUrl = "https://apigenerator.dronahq.com/api/7Xq_O3yE/carro";

// Função para fazer uma solicitação GET para buscar todos os produtos
async function getAllProducts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

// Função para fazer uma solicitação GET para buscar um produto por ID
async function getProductById(id: string) {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  return data;
}

// Função para fazer uma solicitação POST para adicionar um novo produto
async function addProduct(product: Product) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}

// Função para fazer uma solicitação PUT para atualizar um produto existente por ID
async function updateProduct(id: string, product: Product) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}

// Função para fazer uma solicitação DELETE para excluir um produto por ID
async function deleteProduct(id: string) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

// Exemplo de uso das funções execudados dentro de um async para ter tempo de receber os dados
(async () => {
  try {
    // Buscar todos os produtos
    const allProducts = await getAllProducts();
    console.log("Todos os produtos:", allProducts);

    // Buscar um produto por ID
    const productById = await getProductById("1");
    console.log("Produto por ID:", productById);

    // Adicionar um novo produto
    const newProduct = new Product(
      "Marca",
      "Modelo",
      "Categoria",
      2024,
      10000,
      50000
    );
    const addedProduct = await addProduct(newProduct);
    console.log("Novo produto adicionado:", addedProduct);

    // Atualizar um produto existente por ID
    const updatedProduct = await updateProduct("1", newProduct);
    console.log("Produto atualizado:", updatedProduct);

    // Excluir um produto por ID
    const deletedProduct = await deleteProduct("1");
    console.log("Produto excluído:", deletedProduct);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
})();
