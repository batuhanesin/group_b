const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "12345Aa",
    host: "localhost",
    port: 5432,
    database: "hacettepe_topluluk"

})

module.exports = pool;
