
exports.getAllImages = (req, res) => {

    // el controlador va a obtener todos los datos del modelo 'images'
    const allimages = images.findAll()

    res.render('images/index', {images: allimages})
}

exports.getFilteredImages = (req, res) => {

    // obtengo la raza de la QueryString
    const race = req.query.race

    // es el controlador que se encarga de manipular y filtrar los datos. 
    const filteredimages = images.findAll().filter(image => {
        return image.race.toLowerCase() == race.toLowerCase()
    })

    res.render('images/index', {images: filteredimages, race: race})
}

exports.getAddImage = (req, res) => {
    res.render('images/add-image')
}

exports.postAddImage = (req, res) => {
    // recibir los datos del POST
    const name = req.body.name
    const race = req.body.race

    // insertar el nuevo gato en la BBDD
    images.addImage(name, race)

    // redirigir al cliente a la lista de gatos
    res.redirect('/images')
}