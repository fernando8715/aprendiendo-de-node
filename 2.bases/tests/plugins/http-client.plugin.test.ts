import { httpClient } from '../../src/plugins'

describe('plugins/httpClient', () => {

    test('httpClient should return data of a client', async () => {

        const data = await httpClient.get('https://pokeapi.co/api/v2/pokemon/1');

        expect(data.species).toEqual(
            {
                name: expect.any(String),
                url: expect.any(String),
            }
        );
    });

    test('httpClient should have post, put and delete methods', () => {
        
        expect(typeof httpClient.post).toBe('function');
        expect(typeof httpClient.put).toBe('function');
        expect(typeof httpClient.delete).toBe('function');
    });
});