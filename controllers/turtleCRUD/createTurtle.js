// const db = require('')

async function createTurtle({ body }, res) {
  try {
    const turtle = await db.turtles.create(body);

    res.send(turtle)
  } catch (err) {
    res.status(500).send('error while creating turtle', err)
  }
}

module.exports = createTurtle;

// если импортировать сюда бд, экспортируя ее из индекса - может выйти циклическая зависимость - придется массивные круды в индексе писать?