// postgresql://postgres.wwaloqhgdfxkqhpifsiz:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres

// 8arf53lYiq7tdcQ3

const { Sequelize, QueryTypes } = require("sequelize");

let pgurl = "postgresql://postgres.wwaloqhgdfxkqhpifsiz:8arf53lYiq7tdcQ3@aws-0-us-west-1.pooler.supabase.com:6543/postgres";

const connection = new Sequelize(pgurl);

module.exports = connection;
