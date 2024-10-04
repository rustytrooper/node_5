const express = require('express')
const {
  createTurtle, getTurtle, getTurtles, updateTurtle, deleteTurtle,
  createPizza, getPizzas, getPizza, updatePizza, deletePizza,
  createWeapon, getWeapon, getWeapons, updateWeapon, deleteWeapon } = require('./imports')

const createRouter = express.Router()
const updateRouter = express.Router()
const getRouter = express.Router()
const getOneRouter = express.Router()
const deleteRouter = express.Router()

createRouter.post('/turtle', createTurtle)
createRouter.post('/pizza', createPizza)
createRouter.post('/weapon', createWeapon)

updateRouter.put('/turtle/:id', updateTurtle)
updateRouter.put('/pizza/:id', updatePizza)
updateRouter.put('/weapon/:id', updateWeapon)


getRouter.get('/turtle', getTurtles)
getRouter.get('/pizza', getPizzas)
getRouter.get('/weapon', getWeapons)

getOneRouter.get('/turtle/:id', getTurtle)
getOneRouter.get('/pizza/:id', getPizza)
getOneRouter.get('/weapon/:id', getWeapon)

deleteRouter.delete('/turtle/:id', deleteTurtle)
deleteRouter.delete('/pizza/:id', deletePizza)
deleteRouter.delete('/weapon/:id', deleteWeapon)


module.exports = {
  createRouter,
  updateRouter,
  getRouter,
  getOneRouter,
  deleteRouter
}
