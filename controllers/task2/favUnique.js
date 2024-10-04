const db = require('../../db')

async function getUniqueFavPizzas(req, res) {
  try {
    const favPizzas = await db.sequelize.query('select distinct "firstFavoritePizzaId" from turtles GROUP BY "firstFavoritePizzaId"',
      { type: db.sequelize.QueryTypes.SELECT, raw: true })

    res.json(favPizzas)
  } catch (err) {
    res.status(500).send("ошибка при получении любимых пицц " + err)
  }
}

module.exports = getUniqueFavPizzas