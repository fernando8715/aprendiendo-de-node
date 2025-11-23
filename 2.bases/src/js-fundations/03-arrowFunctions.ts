interface Client {
    id: number,
    name: string
}

const clients: Client[] = [
    {
        id: 1,
        name: 'Fernando Ruiz',
    },
    {
        id: 2,
        name: 'Allie Prada',
    }
]

export const getUserById = (id:number, callback:(err?:string, user?:Client)=>void ) => {
    const user = clients.find(client => {
        return client.id === id
    });

    if (!user) {
        return callback(`Usuario no encontrado con id: ${id}`)
    };

    return callback(undefined, user);

}