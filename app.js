const express = require('express')

const app = express()



app.get('/', (req, res) => {
    // res.statusCode = 200;
    res.send('Hello World!')
})

app.listen('80', () => {
    console.log('Server is running at http://localhost:80...')
})