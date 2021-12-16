require("dotenv").config();

module.exports ={
  "development": {
    "username": "root",
    "password": "airbnbpw00",
    "database": "database_development",
    "host": "db-airbnb.cmz3p6yjphvl.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "myp@$$w0rd",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
