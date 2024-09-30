const db = require('../../db')

async function updateWeapon({ body, params }, res) {
  try {
    const weapon = await db.weapons.update(body, {
      where: {
        id: params.id
      }
    })

    res.json(weapon)
  } catch (err) {
    res.status(500).send('ошибка при обновлении оружия', err)
  }
}

module.exports = updateWeapon