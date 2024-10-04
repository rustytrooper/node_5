const db = require('../../db')

async function getMozarella(req, res) {
  try {
    const turtles = await db.turtles.findAll({
      where: {
        firstFavoritePizzaId: 1
      }
    })
    res.json(turtles)
  } catch (err) {
    res.status(500).send('ошибка при получении черепашек, у которых любимая пицца - моццарелла')
  }
}

module.exports = getMozarella