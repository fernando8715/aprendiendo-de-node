import {getAge} from '../../src/plugins';

describe('plugins/get-age.pligins', () => {

    test('getAge return the age of a person', () => {
        
        const birthdate = '1987-08-15';
        const age = getAge(birthdate);
        
        expect(typeof age).toBe('number');
    });

    test('getAge should return current age', () => {
        const birthdate = '1987-08-15';
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculateAge);
        
    });
});