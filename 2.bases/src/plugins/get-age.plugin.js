const getAgePlugin = require('get-age');

//* patron adaptador: me permite desacoplar las dependencias de terceros, creando funciones que utilicen la dependencia y esta es la que utilizo en mi codigo.

const getAge = (birthday)=> {
    return getAgePlugin(birthday)
}

module.exports = {
    getAge,
}