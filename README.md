# To-Do List API

Esta é uma **API REST** robusta e escalável desenvolvida para o gerenciamento de listas de tarefas (To-Do List). O projeto foi construído utilizando **Node.js**, **Express** e **MongoDB**, seguindo as melhores práticas de desenvolvimento, como a arquitetura MVC (Model-View-Controller) e tratamento global de erros.

## 🚀 Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript server-side.
- **[Express](https://expressjs.com/)**: Framework web para Node.js.
- **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL orientado a documentos.
- **[Mongoose](https://mongoosejs.com/)**: ODM (Object Data Modeling) para MongoDB e Node.js.
- **[Nodemon](https://nodemon.io/)**: Ferramenta que reinicia automaticamente o servidor durante o desenvolvimento.
- **[Dotenv](https://github.com/motdotla/dotenv)**: Gerenciamento de variáveis de ambiente.
- **[ESLint](https://eslint.org/)**: Ferramenta de linting para identificar e reportar padrões no código JavaScript.

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```text
src/
├── config/         # Configurações de conexão com o banco de dados
├── controller/     # Lógica de negócio e manipulação das requisições
├── err/            # Classes e middlewares para tratamento de erros
├── middlewares/    # Middlewares do Express (ex: tratamento de erros 404)
├── models/         # Definição dos esquemas (schemas) do Mongoose
├── routes/         # Definição dos endpoints da API
└── app.js          # Configuração principal do aplicativo Express
server.js           # Ponto de entrada da aplicação e inicialização do servidor
```

## 🛠️ Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/RafaelAndriotti/ToDoList.git
   cd ToDoList
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione a sua string de conexão com o MongoDB:
   ```env
   STRING_CONEXAO_DB=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/todo-list
   ```

4. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor estará rodando em `http://localhost:3000` (ou na porta configurada).

## 🛣️ Endpoints da API

A API expõe os seguintes endpoints para o recurso `tasks`:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/tasks` | Lista todas as tarefas cadastradas. |
| **GET** | `/tasks/:id` | Retorna os detalhes de uma tarefa específica. |
| **POST** | `/tasks` | Cria uma nova tarefa. |
| **PUT** | `/tasks/:id` | Atualiza os dados de uma tarefa existente. |
| **DELETE** | `/tasks/:id` | Remove uma tarefa do sistema. |

## 📝 Licença

Este projeto está sob a licença **ISC**.

---
Desenvolvido por [Rafael Andriotti](https://github.com/RafaelAndriotti).
