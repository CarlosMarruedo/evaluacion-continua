const ColorThief = require('colorthief');



ColorThief.getColor('https://static1.elcorreo.com/www/multimedia/202006/07/media/cortadas/opi-portocarrero-kLeC-U110431176796zMD-624x385@El%20Correo.jpg')
    .then(color => { console.log(color) })
    .catch(err => { console.log(err) })