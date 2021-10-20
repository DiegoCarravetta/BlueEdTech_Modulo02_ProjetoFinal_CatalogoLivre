const Sequelize = require (`sequelize`);

const sequelize = new sequelize (process.env.DB_BASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: 5433,
    dialect: 'postgres'
});

module.exports = sequelize;

/*const sequelize = new Sequelize(process.env.DATABASE_URL, {     
  dialect: 'postgres',
  protocol: 'postgres',     
  dialectOptions: {         
    ssl: {             
      require: true,             
      rejectUnauthorized: false         
    }     
  } 
}) */