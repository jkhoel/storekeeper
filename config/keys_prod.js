module.exports = {
  rootUrl: '/api/v1/',
  apiPort: process.env.PORT,
  mySQL: {
    acquireTimeout: 10000,
    connectionLimit: 200,
    connectTimeout: 10000,
    waitForConnection: true,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    debug: false,
  },
};
