/////Você deve implementar um código que leia os dados de uma planilha do "Google Sheets" e salve as informações em uma API
import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "./credentials.json";
import arquivo from "./arquivo.json";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const jwt = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES,
});

//Crie uma função assíncrona GetDoc() que deve criar um novo objeto GoogleSpreadSheet (arquivo de planilhas), carregar suas informações e retornar esse objeto;

//A classe GoogleSpreadSheet recebe 2 parâmetros: o id do arquivo e o jwt criado anteriormente;

//Para carregar as informações do objeto criado, você deve chamar o método LoadInfo(), que não recebe nenhum parâmetro

async function GetDoc() {
  let doc = new GoogleSpreadsheet(arquivo.id, jwt);
  doc.loadInfo();
  return doc;
}

// Crie uma função assíncrona ReadWorkSheet() que deve ler uma planilha específica, colher as informações das linhas, criar uma lista de objetos de usuário com as informações obtidas e retornar essa lista;

// Para ler uma planilha específica, você deve usar o método sheetsByIndex[index] (index = 0 => primeira planilha) em um objeto GoogleSpreadSheet;

// Para colher as informações das linhas, você deve usar a função getRows() em uma planilha;

// Para transformar em objetos as informações obtidas, você deve usar o método toObject() em todas as linhas;

async function ReadWorkSheet() {
  let sheet = (await GetDoc()).sheetsByIndex[0];
  let rows = await sheet.getRows();
  let users = rows.map((row) => {
    return row.toObject();
  });

  return users;
}

// Crie uma API de usuários no dronahq que receba um obejto de usuário com as propriedades: nome, idade e email;

// Crie uma função assíncrona AddUser(data={}) usando o método POST para subir as informações obtidas para a API criada anteriormente;

async function AddUser(data = {}) {
  const response = await fetch(
    "https://apigenerator.dronahq.com/api/7QRzm3ZM/usuarios",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json;
}

//Essa função deve ler uma planilha, colher as informações obtidas através da leitura das linhas e subir essas informações para a sua API de usuários
async function TrackData() {
  let data = await ReadWorkSheet();
  data.map(async (user) => {
    let response = await AddUser(user);
    console.log(response);
  });
  return console.log("Dados copiadoscom sucesso");
}
