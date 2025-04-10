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

**GET /livros/:id**
Retorna um livro específico pelo ID.

**POST /livros**
Cria um novo livro.

**PUT /livros/:id**
Atualiza um livro existente pelo ID.

**DELETE /livros/:id**
Exclui um livro pelo ID.

## Decisões de design e arquitetura tomadas
- Utilizar o ORM Prisma para manipulação do banco de dados.
- Utilizar o framework Express para criação de APIs.
- Utilizar o banco de dados SQLite para armazenamento dos dados.

## Tecnologias utilizadas
- Node.js
- Express
- Prisma
- SQLite  

  
