/** Exports a pooled connection to the MySQL database  */
const mysql = require('mysql');

const config = {
  acquireTimeout: 10000,
  connectionLimit: 200,
  connectTimeout: 10000,
  waitForConnection: true,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  debug: false,
};

const dbPool = mysql.createPool(config);

/**
 * Promise-based MySQL query
 * @desc A helper function for handling DB connections to the SQL database
 * @param {string} req - This would be your sql query
 * @returns {object} - returns an object containing either error or rows
 * @example sql(query).then(data => console.log(data))
 */
module.exports = (req) =>
  new Promise((res) => {
    dbPool.getConnection((err, conn) => {
      if (err) {
        res({ error: { code: 100, status: 'Error in connection to database' } });
      }

      if (conn) {
        console.log(`MYSQL: HOST: ${config.host}`);
        console.log(`MYSQL: Connected as id ${conn.threadId}`);
        console.log('MYSQL QUERY: %s', req);

        conn.query(req, (_err, rows) => {
          conn.release();
          if (!_err) {
            res({ rows });
          }
        });
      } else {
        console.log('==> MYSQL: Connection failed!', err);
      }
    });
  });
