const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    
    const infoToRender = {
        inMainMenu: true
    }

    res.render('index', infoToRender)
})

app.get('/addImage', (req, res) => {
    const infoToRender = {
        inMainMenu: false
    }

    res.render('add-Image', infoToRender)
})

app.listen(3000)