import {getPokemonNameById} from '../../src/js-fundations/05-promises';

describe('js-founfations/05-promises', () => {

    test('getPokemonNameById should return a pokemonName', async() => {
        
        const id= 1;
        const pokemonName = await getPokemonNameById(1);

        expect(pokemonName).toBe('bulbasaur')
    });

    test('getPokemonNameById should return an error with id does not exist', async() => {
        
        const id = 10000000;

        try {
            const pokemonName = await getPokemonNameById(id);       
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Not exist pokemon with id: ${id}`);
        }

    });
});