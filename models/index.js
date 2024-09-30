const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
  // TODO: создание объекта для подключения к базе - sequelize
  const sequelize = new Sequelize('postgres', 'postgres', '1111',
    {
      host: 'localhost',
      dialect: 'postgres',
      logging: false
    })

  // sequelize.authenticate().then((res) => {
  //   console.log('success', res);
  // }).catch((err) => {
  //   console.log('err', err);
  // })
  const turtles = Turtle(Sequelize, sequelize);
  const weapons = Weapon(Sequelize, sequelize);
  const pizzas = Pizza(Sequelize, sequelize);

  // TODO: создание связей между таблицами

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};