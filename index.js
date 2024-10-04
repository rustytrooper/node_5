const express = require('express');
const db = require('./db')
const { createRouter, updateRouter, deleteRouter, getRouter, getOneRouter } = require('./routers')
const getMozarella = require('./controllers/task2/mozarella')
const getUniqueFavPizzas = require('./controllers/task2/favUnique')
const updatePizzaFat = require('./controllers/task2/fatPizza')
const getHighDps = require('./controllers/task2/highDps')


const app = express()
app.use(express.json())
app.use('/api/create', createRouter)
app.use('/api/update', updateRouter)
app.use('/api/read', getOneRouter)
app.use('/api/readAll', getRouter)
app.use('/api/delete', deleteRouter)

app.get('/api/read/mozarella', getMozarella)
app.get('/api/read/fav', getUniqueFavPizzas)
app.get('/api/update/fat', updatePizzaFat)
app.get('/api/read/highDps', getHighDps)


db.sequelize.sync()
  .then(() => {
    console.log('connected to bd');
    app.listen(3000, () => console.log('server started'))
  })
  .catch(err => {
    console.log('error occured', err);
  })


