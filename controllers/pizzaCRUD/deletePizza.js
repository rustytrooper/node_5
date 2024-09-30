const db = require('../../db')

async function deletePizza({ params }, res) {
  try {
    const pizza = await db.pizzas.destroy({
      where: {
        id: params.id
      }
    })

    res.json(pizza)
  } catch (err) {
    res.status(500).send('ошибка при удалении пиццы', err)
  }
}

module.exports = deletePizza