<h1>Gerenciamento Eventos Culturais</h1>
<h2>Descrição</h2>
    <p>Esta aplicação consiste em um cadastro de eventos Culturais, onde é visado a criação de uma plataforma robusta para o gerenciamento de eventos. A plataforma oferecerá aos organizadores de eventos a capacidade de criar e listar seus eventos de maneira eficiente. Além disso, proporcionará aos participantes a oportunidade de explorar, pesquisar e filtrar eventos com base em critérios específicos como categorias, locais e datas.</p>
<h2><strong>Funcionalidades</strong></h2>
    <ul>
        <li>Criar eventos, autenticação</li>
        <li>Listar seus eventos</li>
        <li>Filtrar eventos</li>
    </ul>
<h2><strong>Tecnologias e ferramentas</strong></h2>
    <ul>
        <li>Express</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>Prisma</li>
        <li>Insomnia</li>
    </ul>
<h2><strong>Primeiros passos</strong></h2>
    <ol>
        <li>Clone o repositório em sua máquina rodando o seguinte comando:</li>
        <pre><code>git clone https://github.com/AvantiHeadHunters/gerenciamento-eventos-culturais.git</code></pre>
        <br>
        <li>Instale as dependências rodando o seguinte comando:
            <pre><code>npm install</code></pre>
        </li>
        <li>Crie um arquivo <strong>.env</strong> e, seguindo os exemplos das variáveis de ambiente contidas no arquivo <strong>.env.example</strong>, preencha o arquivo para configurar o banco de dados pelo PostgreSQL e a chave secreta do JSON Web Token.</li>
        <br>
        <li>Crie o banco de dados localmente utilizando uma ferramenta de gestão de bancos de dados (no projeto utilizamos DBeaver).</li>
        <br>
        <li>Aplique as migrações para o seu banco de dados local com o seguinte comando:</li>
         <pre><code>npx prisma migrate dev</code></pre>
        <li>Para possibilitar o teste das rotas por meio da collection <strong>insomnia-gerenciamento-eventos-culturais-avanti</strong>, o arquivo estará disponibilizado na raiz do projeto.</li>
        <br>
        <li>Para rodar o projeto utilize o seguinte comando:</li>
        <pre><code>npm start</code></pre>
        <li>Faça as requisições HTTP através da ferramenta de gestão de bancos de dados, se atentando às necessidades de autenticação e autorização de cada rota.</li>
    </ol>
<h2><strong>Diagrama de Relacionamento</strong></h2>
    <img src="DER.png" alt="Imagem do diagrama de Relacionamento">
<h2><strong>Rotas</strong></h2>
    <p>Utilizando o Insomnia para fazer as requisições <strong>HTTP</strong>, abaixo estará listado as rotas e metodos para cada requisição.</p>
<h3>Rotas de Usuário</h3>
    <table>
        <thead>
            <tr>
            <th>Método</th>
                <th>Endpoint</th>
                <th>Responsabilidade</th>
                <th>Autenticação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/user</td>
                <td>Cria um usuário</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/user/login</td>
                <td>Gera o token de autenticação</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/users</td>
                <td>Lista todos os usuários</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/user/:id</td>
                <td>Lista um usuário por id</td>
                <td>Usuário logado</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/user/:id</td>
                <td>Atualiza um usuário</td>
                <td>Usuário logado</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/user/:id</td>
                <td>Deleta o usuário</td>
                <td>Usuário logado</td>
            </tr>
        </tbody>
    </table>
<h3>Rotas de Eventos</h3>
    <table>
        <thead>
            <tr>
                <th>Método</th>
                <th>Endpoint</th>
                <th>Responsabilidade</th>
                <th>Autenticação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/event</td>
                <td>Cria um evento</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/events</td>
                <td>Lista todos os eventos</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/event/:id</td>
                <td>Lista um evento por id</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/event/:id</td>
                <td>Atualiza um evento</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/event/:id</td>
                <td>Deleta um evento</td>
                <td>Apenas administradores</td>
            </tr>
        </tbody>
    </table>
<h3>Rotas de Locais</h3>
    <table>
        <thead>
            <tr>
                <th>Método</th>
                <th>Endpoint</th>
                <th>Responsabilidade</th>
                <th>Autenticação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/location</td>
                <td>Cria um local</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/locations</td>
                <td>Lista todos os locais</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/location/:id</td>
                <td>Lista um local por id</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/location/:id</td>
                <td>Atualiza um local</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/location/:id</td>
                <td>Deleta o local</td>
                <td>Apenas administradores</td>
            </tr>
        </tbody>
    </table>
<h3>Rotas de Categorias</h3>
    <table>
        <thead>
            <tr>
                <th>Método</th>
                <th>Endpoint</th>
                <th>Responsabilidade</th>
                <th>Autenticação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/category</td>
                <td>Cria uma categoria</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/categories</td>
                <td>Lista todas as categorias</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/category/:id</td>
                <td>Lista uma categoria por id</td>
                <td>Não necessita token</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/category/:id</td>
                <td>Atualiza uma categoria</td>
                <td>Apenas administradores</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/category/:id</td>
                <td>Deleta uma categoria</td>
                <td>Apenas administradores</td>
            </tr>
        </tbody>
    </table>

<h2><strong>Documentação API</strong></h2>

<h3>Rotas de Locations</h3>
<details>
<summary>Resposta <b>GET /locations</b></summary>
<br>
<ul>
    <li>Retorna todos os locais cadastrados.</li>
    <li>Requisição não necessita de autenticação.</li>
</ul>
<p style="color:gray;">Exemplo de sucesso na resposta, status 200:</p>

```json
    [
        {
            "id": 1,
            "name": "Casa de festa teste",
            "address": "Rua 1",
            "zip_code": "12345670",
            "city": "Rio de Janeiro",
            "state": "RJ",
            "link_maps": null
            },
            {
              "id": 2,
              "name": "Teatro de teste",
              "address": "Avenida 2",
              "zip_code": "12345680",
              "city": "Fortaleza",
              "state": "CE",
              "link_maps": "https://www.google.com/maps"
            }
    ]
```
</details>

<details>
<summary>Resposta <b>GET /location/:id</b></summary>
<ul>
    <li>Retorna um local específico cadastrado.</li>
    <li>Requisição não necessita de autenticação.</li>
    <li> Caso o local não seja encontrado, a resposta será um status 404.</li>
</ul>
<p style="color:gray;">Exemplo de sucesso na resposta, status 200:</p>
    
```json
        {
            "id": 1,
            "name": "Casa de festa teste",
            "address": "Rua 1",
            "zip_code": "12345670",
            "city": "Rio de Janeiro",
            "state": "RJ",
            "link_maps": null
        }
```
<p style="color:gray;">Exemplo de local não encontrado, status 404:</p>

```json
    {
        "message": "Location not found"
    }
```
</details>

<details>
<summary>Requisição e Resposta <b>POST /location</b></summary>
<ul>
    <li>Cria um local.</li>
    <li>Requisição necessita de autorização.</li>
    <li> Caso a requisição seja bem sucedida, a resposta será um status 201.</li>
    <li> Caso a requisição seja mal sucedida, a resposta será um status 401.</li>
</ul>
<p style="color:gray;">Exemplo de requisição:</p>

```json
    {
        "name": "Casa de festa teste",
        "address": "Rua 1",
        "zip_code": "12345670",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "link_maps": null
    }
```
<p style="color:gray;">Exemplo de sucesso na resposta, status 201:</p>

```json
    {
        "id": 1,
        "name": "Casa de festa teste",
        "address": "Rua 1",
        "zip_code": "12345670",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "link_maps": null
    }
```
<p style="color:gray;">Exemplo de falha na resposta, status 401:</p>

```json
    {
        "message": "Unauthorized"
    }
```
</details>

<details>
<summary>Requisição e Resposta <b>PUT /location/:id</b></summary>
<ul>
    <li>Atualiza um local.</li>
    <li>Requisição necessita de autorização.</li>
    <li> Caso a requisição seja bem sucedida, a resposta será um status 200.</li>
    <li> Caso a requisição seja mal sucedida, a resposta será um status 401.</li>
</ul>
<p style="color:gray;">Exemplo de requisição:</p>

```json
    {
        "name": "Casa de festa",
        "address": "Rua 1",
        "zip_code": "12345670",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "link_maps": null
    }
```

<p style="color:gray;">Exemplo de sucesso na resposta, status 200:</p>

```json
    {
        "id": 1,
        "name": "Casa de festa",
        "address": "Rua 1",
        "zip_code": "12345670",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "link_maps": null
    }
```

<p style="color:gray;">Exemplo de falha na resposta, status 401:</p>

```json
    {
        "message": "Unauthorized"
    }
```
</details>

<details>
<summary>Resposta <b>DELETE /location/:id</b></summary>
<ul>
    <li>Deleta um local.</li>
    <li>Requisição necessita de autorização.</li>
    <li> Caso a requisição seja bem sucedida, a resposta será um status 204.</li>
</ul>

<p style="color:gray;">Exemplo de fala na resposta, status 401:</p>

```json
    {
        "message": "Unauthorized"
    }
```
</details>