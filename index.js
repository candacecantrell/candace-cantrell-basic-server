const express = require('express')

const testRoute = require('./routes/test.route')
const app = express()

app.use(express.static('public'))

app.use('/', testRoute)

const port = 5000

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
    
})