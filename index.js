const app = require('./app')
const db = require('./config/db')
const UserModel = require('../model/UserModel')

const PartyService = require('../services/PartyService')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
