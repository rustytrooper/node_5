const db = require('../../db')

async function getPizzas(req, res) {
  try {
    const pizzas = await db.pizzas.findAll();

    res.json(pizzas)
  } catch (err) {
    res.status(500).send('ошибка при получении списка пицц', err)
  }
}

async function getPizza({ params }, res) {
  try {
    const pizza = await db.pizzas.findOne({
      where: {
        id: params.id
      }
    })

    res.json(pizza)
  } catch (err) {
    res.status(500).send('ошибка при получении пиццы', err)
  }
}

module.exports = {
  getPizza,
  getPizzas
}