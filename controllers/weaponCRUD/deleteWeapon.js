const db = require('../../db')

async function deleteWeapon({ params }, res) {
  try {
    const weapon = await db.weapons.destroy({
      where: {
        id: params.id
      }
    })

    res.json(weapon)
  } catch (err) {
    res.status(500).send('ошибка при удалении оружия', err)
  }
}

module.exports = deleteWeapon