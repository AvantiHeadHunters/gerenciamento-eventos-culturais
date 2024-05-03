<!DOCTYPE html>
<html lang="en">
    <h1>Descrição</h1>
    <p>Esta aplicação consiste em um cadastro de eventos Culturais, onde é visado a criação de uma plataforma robusta para o gerenciamento de eventos. A plataforma oferecerá aos organizadores de eventos a capacidade de criar e listar seus eventos de maneira eficiente. Além disso, proporcionará aos participantes a oportunidade de explorar, pesquisar e filtrar eventos com base em critérios específicos como categorias, locais e datas.</p>
    <h1><strong>Funcionalidades</strong></h1>
    <ul>
        <li>Criar eventos, autenticação</li>
        <li>Listar seus eventos</li>
        <li>Filtrar eventos</li>
    </ul>
    <h1><strong>Tecnologias e ferramentas</strong></h1>
    <ul>
        <li>Express</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>Prisma</li>
        <li>Insomnia</li>
    </ul>
    <h1><strong>Primeiros passos</strong></h1>
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
    <h1><strong>Diagrama de Relacionamento</strong></h1>
    <img src="DER.png" alt="Imagem do diagrama de Relacionamento">
    <h1><strong>Rotas</strong></h1>
    <p>Utilizando o Insomnia para fazer as requisições <strong>HTTP</strong>, abaixo estará listado as rotas e metodos para cada requisição.</p>
    <h2>Rotas de Usuário</h2>
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
    <h2>Rotas de Eventos</h2>
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
    <h2>Rotas de Locais</h2>
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
    <h2>Rotas de Categorias</h2>
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
</html>
