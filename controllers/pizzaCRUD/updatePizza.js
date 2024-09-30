const db = require('../../db')

async function updatePizza({ body, params }, res) {
  try {
    const pizza = await db.pizzas.update(body, {
      where: {
        id: params.id
      }
    })
    res.json(pizza)

  } catch (err) {
    res.status(500).send('ошибка при обновлении пиццы', err)
  }
}

module.exports = updatePizza