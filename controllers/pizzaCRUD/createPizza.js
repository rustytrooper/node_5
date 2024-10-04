const db = require('../../db')

async function createPizza({ body }, res) {
  try {
    const pizza = await db.pizzas.create(body);
    res.json(pizza)
  } catch (err) {
    res.status(500).send('ошибка при создании пиццы ' + err)
  }
}

module.exports = createPizza