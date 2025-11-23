import { makeBuildPerson } from '../../src/js-fundations/04-factory';


describe('js-foundation/04-factory', () => {

    const getId = () => '1234';
    const getAge = () => 35;

    test('makeBuildPerson should return a function', () => {

        const makePerson = makeBuildPerson({ getId, getAge })


        expect(typeof makePerson).toBe('function')
    });

    test('makePerson should return a person', () => {

        const makePerson = makeBuildPerson({ getId, getAge });
        const fernando = makePerson({ name: 'Fernando Ruiz', birthdate: '1987-08-15' });

        expect(fernando).toEqual({
            id: '1234',
            name: 'Fernando Ruiz',
            birthdate: '1987-08-15',
            age: 35,
        });
    })
});