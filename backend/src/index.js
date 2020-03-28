const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/* consigo captura o JSON no corpo da requisição */
app.use(cors());
app.use(express.json());
app.use(routes);
/*
* Rota  /Recurso
*/

/*
* Métodos HTTP
* GET: Buscar informações do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Apagar uma informação no back-end
*/ 

/*
* Tipos de parâmetros:
* Query Params: Parâmetros nomeados enviados na rota após o simbolo '?' e separados por '&'
*  /users?name=Masp&idade=56
* 
* Recupero os dados dos parâmentros da seguinte form
* const params = request.params
* 
* Route Params: Parâmetros utilizados para identficar recursos
* /users/:id
* const params = request.params
* /users/1
*
* Request Body: Recupera os dados vindos no corpo da requisição, utilizado para criar usuário por exemplo
* const params = request.query
*/

/*
* Bancos de dados
* SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/*
* Insralado o nodemon para monitroar alterações na aplicação e reiniciar o servidor
* npm install nodemon -D
* o -D refere-se a instalação apenas no desenvolvimento
* na sequencia se faz a configuração para iniciar usando o npm start
* adicionando a entrada abaixo em package.json
* "start": "nodemon index.js"
*/

/*
*  Driver: SELECT * DROM users
* Query Builder: table('user').select('*').Where()
*
* Usaremoso KNEX como o Query builder e assim poder usar qualquer banco de dados
*/



app.listen(3333);

