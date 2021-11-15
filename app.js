const express = require('express')

const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// 設定 view engine 使用 handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    // res.statusCode = 200;
    res.send('Hello World!')
})

app.listen('80', () => {
    console.log('Server is running at http://localhost:80...')
})