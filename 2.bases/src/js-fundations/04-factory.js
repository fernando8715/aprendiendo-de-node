//** funcion factory, es una funcion que recibe como argumento las dependencias y retorna otra funcion que crea el objeto. */ 
// * el archivo no requiere dependencias, ya que estas se llaman en el lugar donde se vaya a utilizar la funcion*/ 

const makeBuildPerson = ({getId, getAge})=> {

    return ({name, birthday})=> {
        
        return {
            id: getId(),
            name,
            birthday,
            age: getAge(birthday)
        }
    }
    
};

module.exports = {
    makeBuildPerson,
}









