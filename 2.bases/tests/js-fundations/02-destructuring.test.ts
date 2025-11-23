import {superHeros} from '../../src/js-fundations/02-desestructuring';

describe('js-fundations/02-destructuring', () => {

    test('Superheroes should contain Batman and Flash', () => {
    
        const [superman, batman] = superHeros
        expect(superman).toBe('Superman');
        expect(batman).toBe('Batman');
    });
});