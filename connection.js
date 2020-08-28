const { Pool } = require('pg');
const connectionString = '<your postgre uri>';
const pool = new Pool({
    connectionString: connectionString,
    ssl: connectionString.includes('localhost') ? false : {
        rejectUnauthorized: false
    }
});
module.exports = pool;