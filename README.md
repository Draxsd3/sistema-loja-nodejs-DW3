<h1 align="center">🛒 SistemaLoja - Aplicação Node.js com Express e Bootstrap</h1>

<p align="center">
  Uma aplicação web simples construída com <strong>Node.js</strong>, <strong>Express</strong> e <strong>Bootstrap</strong> para gerenciar clientes, produtos e pedidos de uma loja fictícia.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
</p>

---

## 🚀 Funcionalidades

- Página inicial com navegação entre seções
- Visualização de dados de **clientes**, **produtos** e **pedidos**
- Interface responsiva com **Bootstrap**
- Organização de rotas utilizando **Express.js**
- Dados dinâmicos simulados por **arrays de objetos**
- Atualização automática no desenvolvimento com **Nodemon**

---

## 📁 Estrutura de Pastas

SistemaLoja/ ├── public/ │ ├── css/ │ ├── js/ │ └── images/ ├── routes/ │ ├── index.js │ ├── clientes.js │ ├── produtos.js │ └── pedidos.js ├── views/ │ ├── partials/ │ ├── index.ejs │ ├── clientes.ejs │ ├── produtos.ejs │ └── pedidos.ejs ├── app.js └── package.json

yaml
Copiar
Editar

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Bootstrap 5](https://getbootstrap.com/)
- [EJS](https://ejs.co/) (para renderização de views)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Draxsd3/sistema-loja-nodejs.git

# Acesse a pasta do projeto
cd sistema-loja-nodejs

# Instale as dependências
npm install
npm i express
npm i ejs
npm i nodemon

# Inicie a aplicação
nodemon app.js

🌐 Rotas Disponíveis
Rota	Descrição
/	Página inicial com navbar
/clientes	Tabela com lista de clientes
/produtos	Tabela com lista de produtos
/pedidos	Tabela com pedidos realizados

🧪 Exemplo de Dados
Os dados são passados via arrays de objetos, como no exemplo abaixo:

js
Copiar
Editar
const clientes = [
  { nome: "João Silva", cpf: "123.456.789-00", endereco: "Rua A, 123" },
  ...
];


💡 Melhorias Futuras
Integração com banco de dados

Autenticação de usuários

Cadastro e edição de dados

Dashboard com gráficos e relatórios

📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar. 😉

<p align="center"> Feito com ❤️ por <strong>Draxsd3</strong> </p> ```
