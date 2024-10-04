
const { getTurtles, getTurtle } = require('./controllers/turtleCRUD/getTurtles')
const { getPizza, getPizzas } = require('./controllers/pizzaCRUD/getPizzas')
const { getWeapon, getWeapons } = require('./controllers/weaponCRUD/getWeapons')

const createTurtle = require('./controllers/turtleCRUD/createTurtle')
const updateTurtle = require('./controllers/turtleCRUD/updateTurtle')
const deleteTurtle = require('./controllers/turtleCRUD/deleteTurtle')

const createPizza = require('./controllers/pizzaCRUD/createPizza')
const updatePizza = require('./controllers/pizzaCRUD/updatePizza')
const deletePizza = require('./controllers/pizzaCRUD/deletePizza')

const createWeapon = require('./controllers/weaponCRUD/createWeapon')
const updateWeapon = require('./controllers/weaponCRUD/updadteWeapon')
const deleteWeapon = require('./controllers/weaponCRUD/deleteWeapon')

const getMozarella = require('./controllers/task2/mozarella')

module.exports = {
  createTurtle,
  getTurtles,
  getTurtle,
  updateTurtle,
  deleteTurtle,
  createPizza,
  getPizza,
  getPizzas,
  updatePizza,
  deletePizza,
  createWeapon,
  getWeapon,
  getWeapons,
  updateWeapon,
  deleteWeapon,
  getMozarella
}