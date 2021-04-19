const BBDD_images = []
const uuid = require('uuid')

exports.findAll = () => {
    return BBDD_images
}

exports.addImage = (title, url, date) => {
    const newImage =
    {
        id: uuid.v1(),
        title: title,
        url: url,
        date: date
    }

    // El hecho de mantener en el modelo la manera que insertamos un nuevo registro en la BBDD; nos permite que si en el futuro nuestra BBDD cambia, solo tengamos que realizar las modificaciones en este fichero 
    
    // mongoDB.insert({name: name, race:race})
    BBDD_images.push(newImage)
}

exports.urlAlreadySave = (url) => {
    const filteredimages = BBDD_images.filter(image => {
        return image.url.toLowerCase() == url.toLowerCase()
    })

    if(filteredimages.length > 0){
        return true
    }else{
        return false
    }
}