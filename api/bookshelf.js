var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "mystica_books"
    }
});

module.exports = require('bookshelf')(knex);
