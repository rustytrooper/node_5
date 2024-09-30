// const Sequelize = require('sequelize');
const express = require('express');
const db = require('./db')
const { createRouter, updateRouter, deleteRouter, getRouter, getOneRouter } = require('./routers')

// const config = require('./config.json');
// const db = require('./models')(Sequelize, config);
// const cruds = require('./imports')


const app = express()
app.use(express.json())
app.use('/api/crerate', createRouter)
app.use('/api/update', updateRouter)
app.use('/api/read', getOneRouter)
app.use('/api/readAll')
app.use('/api/delete', deleteRouter)
// app.post('/api/create/turtle', async ({ body }, res) => {
//   try {
//     const turtle = await db.turtles.create(body);

//     res.send(turtle)
//   } catch (err) {
//     res.status(500).send('error while creating turtle', err)
//   }
// })

app.post('/api/create/turtle', cruds.createTurtle)

db.sequelize.sync()
  .then(() => {
    console.log('connected to bd');
    app.listen(3000, () => console.log('server started'))
  })
  .catch(err => {
    console.log('error occured', err);
  })

// TODO: запросы к БД
