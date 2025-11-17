const clients = [
    {
        id: 1,
        name: 'Fernando Ruiz',
    },
    {
        id: 2,
        name: 'Allie Prada',
    }
]

const getUserById = (id, callback) => {
    const cliente = clients.find(client => {
        return client.id === id
    });

    if (!cliente) {
        return callback(`Usuario no encontrado con id: ${id}`)
    };

    return callback(null, cliente);

}


module.exports = {
    getUserById,
}