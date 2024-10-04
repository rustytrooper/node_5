const db = require('../../db')

async function getHighDps(req, res) {
  try {
    const weapons = await db.weapons.findAll({
      where: {
        dps: {
          [db.Sequelize.Op.gt]: 100
        }
      }
    })

    res.json(weapons)
  } catch (err) {
    res.status(500).send('щшибка при получении оружия с дпс более чем 100 единиц ' + err)
  }
}

module.exports = getHighDps