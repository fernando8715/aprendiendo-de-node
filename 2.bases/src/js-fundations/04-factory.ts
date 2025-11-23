//** funcion factory, es una funcion que recibe como argumento las dependencias y retorna otra funcion que crea el objeto. */ 
// * el archivo no requiere dependencias, ya que estas se llaman en el lugar donde se vaya a utilizar la funcion*/ 

interface MakeBuildPersonProps {
    getId: ()=> string,
    getAge: (birthdate:string)=>number,
}

interface PersonProperties {
    name: string,
    birthdate: string,
}


export const makeBuildPerson = ({getId, getAge}: MakeBuildPersonProps)=> {

    return ({name, birthdate}: PersonProperties)=> {
        
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
    
};









