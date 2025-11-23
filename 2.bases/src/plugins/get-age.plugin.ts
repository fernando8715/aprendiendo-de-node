//* patron adaptador: me permite desacoplar las dependencias de terceros, creando funciones que utilicen la dependencia y esta es la que utilizo en mi codigo.

export const getAge = (birthday: string)=> {

    return new Date().getFullYear() - new Date(birthday).getFullYear();
}