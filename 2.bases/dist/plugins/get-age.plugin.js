"use strict";
//* patron adaptador: me permite desacoplar las dependencias de terceros, creando funciones que utilicen la dependencia y esta es la que utilizo en mi codigo.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthday) => {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
};
exports.getAge = getAge;
