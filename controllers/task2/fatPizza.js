const db = require('../../db')

async function updatePizzaFat(req, res) {
  try {
    const pizzas = await db.pizzas.findAll({
      where: {
        calories: {
          [db.Sequelize.Op.gt]: 3000
        }
      }
    })

    for (let pizza of pizzas) {
      await pizza.update({
        description: pizza.description + " SUPER FAT "
      })
    }

    res.json(pizzas)
  } catch (err) {
    res.status(500).send('ошибка при обновлении пицц ' + res)
  }
}

module.exports = updatePizzaFat