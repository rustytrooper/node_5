const db = require('../../db')

async function deleteTurtle({ params }, res) {
  try {
    const turtles = await db.turtles.destroy({
      where: {
        id: params.id
      }
    })

    res.json(turtles)

  } catch (err) {
    res.status(500).send('ошибка при удалении черепашки', err)
  }
}

module.exports = deleteTurtle