# API-backend-livros

Atividade Avaliativa: Desenvolvimento de API Backend com CRUD Completo e Prisma ORM


## Como executar o projeto em que utilizou um template pronto
1. **Clone o repositório em que criou utilizando um tamplate pronto**:
   git clone https://github.com/JuliaMartins25/API-backend-livros.git            

            
2. **Instalar as dependências**:
   npm install

3. **Crie o arquivo .env com a variável DATABASE_URL apontando para o banco de dados desejado.**
   DATABASE_URL="file:./dev.db"

4. **Execute as migrações:**
   npx prisma migrate dev

5. **Execute o servidor:**
   npm run dev

## Exemplo de requisição
**GET /livros**
Retorna todos os livros.
**exemplo da resposta:**

 {
    "id": 1,
    "title": "O Senhor dos Anéis",
    "author": "J.R.R. Tolkien",
    "publisher": "HarperCollins",
    "isbn": 9780261102385,
    "category": "Fantasia",
    "year": 1954,
    "description": "Uma das maiores obras de fantasia de todos os tempos."
  },
   {
    "id": 2,
    "title": "O Hobbit",
    "author": "J.R.R. Tolkien",
    "publisher": "HarperCollins",
    "isbn": 9780261102217,
    "category": "Fantasia",
    "year": 1937,
    "description": "Uma aventura épica na Terra Média."
  }


**GET /livros/:id**
Retorna um livro específico pelo ID.
GET /livros/1
**exemplo da resposta:**
{
  "id": 1,
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "publisher": "HarperCollins",
  "isbn": 9780261102385,
  "category": "Fantasia",
  "year": 1954,
  "description": "Uma das maiores obras de fantasia de todos os tempos."
}

**POST /livros**
Cria um novo livro.
**exemplo no body:**
{
"title": "O Hobbit",
  "author": "J.R.R. Tolkien",
  "publisher": "HarperCollins",
  "isbn": 9780261102217,
  "category": "Fantasia",
  "year": 1937,
  "description": "Uma aventura épica na Terra Média."
}

**exemplo da resposta:**
{
  "id": 3,
  "title": "O Hobbit",
  "author": "J.R.R. Tolkien",
  "publisher": "HarperCollins",
  "isbn": 9780261102217,
  "category": "Fantasia",
  "year": 1937,
  "description": "Uma aventura épica na Terra Média."
}

**PUT /livros/:id**
Atualiza um livro existente pelo ID.
PUT /livros/1
**exemplo do body:**
{
  "title": "O Senhor dos Anéis - Edição Revisada",
  "author": "J.R.R. Tolkien",
  "publisher": "HarperCollins",
  "isbn": 9780261102385,
  "category": "Fantasia",
  "year": 1954,
  "description": "Uma edição revisada da maior obra de fantasia de todos os tempos."
}

**exemplo da resposta:**
{
  "id": 1,
  "title": "O Senhor dos Anéis - Edição Revisada",
  "author": "J.R.R. Tolkien",
  "publisher": "HarperCollins",
  "isbn": 9780261102385,
  "category": "Fantasia",
  "year": 1954,
  "description": "Uma edição revisada da maior obra de fantasia de todos os tempos."
}

**DELETE /livros/:id**
Exclui um livro pelo ID.
DELETE /livros/1
**exemplo da resposta:**
{
  "message": "Livro com ID 1 foi excluído com sucesso."
}

## Decisões de design e arquitetura tomadas
- Utilizar o ORM Prisma para manipulação do banco de dados.
- Utilizar o framework Express para criação de APIs.
- Utilizar o banco de dados SQLite para armazenamento dos dados.

## Tecnologias utilizadas
- Node.js
- Express
- Prisma
- SQLite 
- Thunder Client

  
