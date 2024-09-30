const db = require('../../db')

async function getTurtles(req, res) {
  try {
    const turtles = await db.turtles.findAll()
    res.json(turtles)
  } catch (err) {
    res.status(500).send('ошибка при чтении черепашек', err)
  }
}

async function getTurtle({ params }, res) {
  try {
    const turtle = await db.turtles.findOne({
      where: {
        id: params.id
      }
    })

    res.json(turtle)
  } catch (err) {
    res.status(500).send('ошибка при чтении черепашки', err)
  }
}

module.exports = {
  getTurtles,
  getTurtle
}