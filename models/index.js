const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize('postgres', 'postgres', '1111', config)

  const turtles = Turtle(Sequelize, sequelize);
  const weapons = Weapon(Sequelize, sequelize);
  const pizzas = Pizza(Sequelize, sequelize);

  pizzas.hasMany(turtles, { foreignKey: 'firstFavoritePizzaId' })
  pizzas.hasMany(turtles, { foreignKey: 'secondFavoritePizzaId' })
  weapons.hasMany(turtles, { foreignKey: 'weaponId' })

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};