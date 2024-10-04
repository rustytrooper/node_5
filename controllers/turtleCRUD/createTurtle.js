const db = require('../../db')

async function createTurtle({ body }, res) {
  try {
    const turtle = await db.turtles.create(body);
    res.send(turtle)
  } catch (err) {
    res.status(500).send('error while creating turtle ' + err)
  }
}

module.exports = createTurtle;

