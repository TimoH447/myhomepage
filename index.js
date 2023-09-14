
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	  res.send('Hello Web3.0!')
})

app.listen(port,'::', () => {
	  console.log(`Example app listening on port ${port}`)
})

