"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const clients = [
    {
        id: 1,
        name: 'Fernando Ruiz',
    },
    {
        id: 2,
        name: 'Allie Prada',
    }
];
const getUserById = (id, callback) => {
    const user = clients.find(client => {
        return client.id === id;
    });
    if (!user) {
        return callback(`Usuario no encontrado con id: ${id}`);
    }
    ;
    return callback(undefined, user);
};
exports.getUserById = getUserById;
