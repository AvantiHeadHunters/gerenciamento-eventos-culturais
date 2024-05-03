
#   Gerenciamento Eventos Culturais
## Introdução

Esta aplicação consiste em um cadastro de eventos Culturais, onde é visado a criação de uma plataforma robusta para o gerenciamento de eventos. A plataforma oferecerá aos organizadores de eventos a capacidade de criar e listar seus eventos de maneira eficiente. Além disso, proporcionará aos participantes a oportunidade de explorar, pesquisar e filtrar eventos com base em critérios específicos como categorias, locais e datas.

# Funcionalidades
- Criar eventos, autenticação 
- Listar seus eventos
- Filtrar eventos

# Tecnologias utilizadas
- NodeJS  
- Express                     
- Prisma
- PostgreSQL
- Insomnia
- API REST

# Diagrama de Relacionamento
<img align="center" height="550" width="780" src="DER.png" alt="Imagem do diagrama de Relacionamento">

# Como executar
Antes de tudo, clone o repositório em sua máquina usando: 
```bash
  git clone https://github.com/AvantiHeadHunters/gerenciamento-eventos-culturais.git
```
Depois instale as dependências rodando o seguinte comando:

```bash
npm install
```
Aqui será preciso criar um arquivo `.env` seguindo o exemplo do arquivo `.env.example`.
<br>
Preencha o arquivo para configurar o banco de dados local. 

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/nome_do_banco
```

Execute a migração do banco de dados local com o comando:

```bash
npx prisma migrate -dev
```

Inicie o servidor com o seguinte comando:

```bash
npm start
```
#


 <h1> Rotas </h1>

### Rotas de Usuário 

#### Utilizando o Insomnia para fazer as requisições `HTTP`, abaixo estará listado as rotas e metodos para cada requisição.

```http
  http://localhost:porta/users
```

| Metodo   | Endpoint      | Responsabilidade                 |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/users` |`Lista todos os usuários`  |
| `GET` | `/user/:id` |`Lista um usuário por id`  |
| `POST` | `/user` |`Cria um usuário`  |
| `PUT` | `/user/:id` |`Atualiza um usuário`  |
| `DELETE` | `/user/:id` |`Deleta o usuário`  |

#### Rotas de Eventos

```http
   http://localhost:porta/events
```

| Metodo   | Endpoint      | Responsabilidade                 |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/events` |`Lista todos os eventos`  |
| `GET` | `/event/:id` |`Lista um evento por id`  |
| `POST` | `/event` |`Cria um evento`  |
| `PUT` | `/event/:id` |`Atualiza um evento	`  |
| `DELETE` | `/event/:id` |`Deleta um evento`  |

#### Rotas de Locais

```http
   http://localhost:porta/locations
```

| Metodo   | Endpoint      | Responsabilidade                 |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/locations` |`Lista todos os locais`  |
| `GET` | `/location/:id` |`Lista um local por id`  |
| `POST` | `/location` |`Cria um local`  |
| `PUT` | `/location/:id` |`Atualiza um local	`  |
| `DELETE` | `/location/:id` |`Deleta o local`  |

#### Rotas de Categorias

```http
   http://localhost:porta/categories
```

| Metodo   | Endpoint      | Responsabilidade                 |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/categories` |`Lista todas as categorias`  |
| `GET` | `/category/:id` |`Lista uma categoria por id	`  |
| `POST` | `/category` |`Cria uma categoria`  |
| `PUT` | `/category/:id` |`Atualiza uma categoria	`  |
| `DELETE` | `/category/:id` |`Deleta uma categoria`  |
