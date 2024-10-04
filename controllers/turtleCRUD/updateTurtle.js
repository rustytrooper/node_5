const db = require('../../db')

async function updateTurtle({ params, body }, res) {
  try {
    const turtles = await db.turtles.update(body, {
      where:
      {
        id: params.id
      }
    });

    res.json(turtles)
  } catch (err) {
    res.status(500).send('ошибка при обновлении черепашки ' + err)
  }
}

module.exports = updateTurtle