const db = require('../../db')

async function createWeapon({ body }, res) {
  try {
    const weapon = await db.weapons.create(body);

    res.json(weapon)
  } catch (err) {
    res.status(500).send('ошибка при создании оружия' + err)
  }
}

module.exports = createWeapon