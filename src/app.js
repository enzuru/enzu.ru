const express = require('express')
const app = express()
const port = process.env.PORT || 1337

app.use(express.static('public'))
app.listen(port, () => console.log(`App listening on port ${port}!`))
