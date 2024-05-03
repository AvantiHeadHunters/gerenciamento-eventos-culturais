<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentação do Projeto</title>
</head>
<body>
    <h2><strong>1. Tecnologias e ferramentas</strong></h2>
    <ul>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Prisma</li>
        <li>Insomnia</li>
    </ul>
    <h2><strong>2. Primeiros passos</strong></h2>
    <ol>
        <li>Clone o repositório em sua máquina.</li>
        <br>
        <li>Instale as dependências rodando o seguinte comando:
            <pre><code>npm install</code></pre>
        </li>
        <li>Crie um arquivo <strong>.env</strong> e, seguindo os exemplos das variáveis de ambiente contidas no arquivo <strong>.env.example</strong>, preencha o arquivo para configurar o banco de dados pelo PostgreSQL e o JSON Web Token.</li>
        <br>
        <li>Crie o banco de dados localmente utilizando uma ferramenta de gestão de bancos de dados (no projeto utilizamos DBeaver).</li>
        <br>
        <li>Aplique as migrações para o seu banco de dados local com o seguinte comando:</li>
         <pre><code>npx prisma migrate dev</code></pre>
        <li>Para possibilitar o teste das rotas por meio da collection <strong>insomnia-gerenciamento-eventos-culturais-avanti</strong>, o arquivo estará disponibilizado na raiz do projeto.</li>
        <br>
        <li>Para rodar o projeto utilize o seguinte comando:</li>
        <pre><code>npm start</code></pre>
        <li>Faça as requisições HTTP atraves da ferramenta de gestão de bancos de dados, se atentando às necessidades de autenticação e autorização de cada rota.</li>
    </ol>
    <h2><strong>3. Diagrama de Relacionamento</strong></h2>
    <img src="DER.png" alt="Imagem do diagrama de Relacionamento">
    <h2></h2>
    <h1>Rotas de Usuário</h1>
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
    <h1>Rotas de Eventos</h1>
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
    <h1>Rotas de Locais</h1>
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
        <h1>Rotas de Categorias</h1>
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
</body>
</html>
