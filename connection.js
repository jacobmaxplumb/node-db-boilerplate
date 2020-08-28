const { Pool } = require('pg');
const connectionString = 'postgres://zbqujjlymnbkok:f573c5134aeeadc1c58dfea82c391a39b427c77518fe9a5dfc28406248702937@ec2-34-195-115-225.compute-1.amazonaws.com:5432/deqk0orch11qq';
const pool = new Pool({
    connectionString: connectionString,
    ssl: connectionString.includes('localhost') ? false : {
        rejectUnauthorized: false
    }
});
module.exports = pool;