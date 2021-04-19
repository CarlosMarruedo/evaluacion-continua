const BBDD_images = []
const uuid = require('uuid')
const ColorThief = require('colorthief');

exports.findAll = () => {
    return BBDD_images
}

exports.addImage = (title, url, date) => {
    ColorThief.getColor(url)
    .then(color => { 
        console.log(color)
        const newImage =    
        {
            id: uuid.v1(),
            title: title,
            url: url,
            color: color,
            date: date
        }
    
        // El hecho de mantener en el modelo la manera que insertamos un nuevo registro en la BBDD; nos permite que si en el futuro nuestra BBDD cambia, solo tengamos que realizar las modificaciones en este fichero 
        
        // mongoDB.insert({name: name, race:race})
        BBDD_images.push(newImage) 
    })
    .catch(err => { console.log(err) })
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
