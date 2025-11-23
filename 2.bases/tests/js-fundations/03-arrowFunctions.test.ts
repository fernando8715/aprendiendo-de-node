import { getUserById } from '../../src/js-fundations/03-arrowFunctions';

describe('js-foundations/03-arrowFunctions', () => {

    test('getUserById should return an error if user does not exist', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {

            expect(err).toBe(`Usuario no encontrado con id: ${id}`);
            expect(user).toBe(undefined);

            done();
        })
    });

    test('getUserById with id:1 should be Fernando Ruiz', (done) => {

        const id = 1;


        getUserById(id, (err, user) => {
            expect(err).toBe(undefined);
            expect(user).toEqual({
                id: 1,
                name: 'Fernando Ruiz',
            },);

            done();
        })
    });
});