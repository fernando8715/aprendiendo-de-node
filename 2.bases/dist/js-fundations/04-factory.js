"use strict";
//** funcion factory, es una funcion que recibe como argumento las dependencias y retorna otra funcion que crea el objeto. */ 
// * el archivo no requiere dependencias, ya que estas se llaman en el lugar donde se vaya a utilizar la funcion*/ 
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBuildPerson = void 0;
const makeBuildPerson = ({ getId, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.makeBuildPerson = makeBuildPerson;
