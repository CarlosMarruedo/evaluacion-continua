const express = require('express')
const app = express()

const img = require('./models/images')

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

app.post('/addImage', (req, res) => {
    
    if(img.urlAlreadySave(req.body.url)){
        
        res.status(404).send("La url ya existe en la BD");
    }else{
        img.addImage(req.body.title, req.body.url, req.body.date);
        res.redirect('/')
    }
})

app.listen(3000)

