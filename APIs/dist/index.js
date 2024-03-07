"use strict";
//Crie uma classe conforme o diagrama, esta classe não precisa estar com as propriedades encapsuladas porém precisa de um construtor!
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Depois disso o desafio é implementar as APIs: GET, GET by id, POST, PUT, DELETE no código usando o typscript.
class Product {
    constructor(Marca, Modelo, Categoria, Ano, Quilometragem, Valor) {
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
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrl);
        const data = yield response.json();
        return data;
    });
}
// Função para fazer uma solicitação GET para buscar um produto por ID
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiUrl}/${id}`);
        const data = yield response.json();
        return data;
    });
}
// Função para fazer uma solicitação POST para adicionar um novo produto
function addProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = yield response.json();
        return data;
    });
}
// Função para fazer uma solicitação PUT para atualizar um produto existente por ID
function updateProduct(id, product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = yield response.json();
        return data;
    });
}
// Função para fazer uma solicitação DELETE para excluir um produto por ID
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
        });
        const data = yield response.json();
        return data;
    });
}
// Exemplo de uso das funções
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Buscar todos os produtos
        const allProducts = yield getAllProducts();
        console.log("Todos os produtos:", allProducts);
        // Buscar um produto por ID
        const productById = yield getProductById("1");
        console.log("Produto por ID:", productById);
        // Adicionar um novo produto
        const newProduct = new Product("Marca", "Modelo", "Categoria", 2024, 10000, 50000);
        const addedProduct = yield addProduct(newProduct);
        console.log("Novo produto adicionado:", addedProduct);
        // Atualizar um produto existente por ID
        const updatedProduct = yield updateProduct("1", newProduct);
        console.log("Produto atualizado:", updatedProduct);
        // Excluir um produto por ID
        const deletedProduct = yield deleteProduct("1");
        console.log("Produto excluído:", deletedProduct);
    }
    catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}))();
