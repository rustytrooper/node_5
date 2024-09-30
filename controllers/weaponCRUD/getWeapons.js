const db = require('../../db')

async function getWeapons(req, res) {
  try {
    const weapons = await db.weapons.findAll()

    res.json(weapons)
  } catch (err) {
    res.status(500).send('ошибка при получении списка оружия', err)
  }
}

async function getWeapon({ params }, res) {
  try {
    const weapon = await db.weapons.findOne({
      where: {
        id: params.id
      }
    })

    res.json(weapon)
  } catch (err) {
    res.status(500).send('ошибка при получении оружия', err)
  }
}

module.exports = {
  getWeapon,
  getWeapons
}