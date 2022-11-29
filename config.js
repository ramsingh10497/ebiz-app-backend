const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  database: process.env.DATABASE,
  username: process.env.UNAME,
  password: process.env.PASSWORD
};