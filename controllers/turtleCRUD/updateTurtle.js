const db = require('../../db')

async function updateTurtle({ body, params }, res) {
  try {
    const turtles = db.turtles.update(body, {
      where:
      {
        id: params.id
      }
    });

    res.json(turtles)
  } catch (err) {
    res.status(500).send('ошибка при обновлении черепашки', err)
  }
}

module.exports = updateTurtle