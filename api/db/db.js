const { Pool } = require('pg');

const config = ({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: "Pa$$w0rd",
    database: "imc_db"
});

const pool = new Pool(config);

module.exports = pool;
