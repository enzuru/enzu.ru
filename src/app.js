const express = require('express')
const secureRedirect = require('express-http-to-https').redirectToHTTPS
const app = express()
const port = process.env.PORT || 1337

app.use(express.static('public'))
app.use(secureRedirect([/localhost:(\d{4})/], [/\/insecure/], 301))
app.listen(port, () => console.log(`App listening on port ${port}!`))
