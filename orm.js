const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  food: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dessert: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'FOOD'
  // options
});

// Note: using `force: true` will drop the table if it already exists
User.sync({ force: false }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
      food: 'Spaghetti bolognese',
      dessert: 'Chokolade'
    });
  });

  /*sequelize.close()*/