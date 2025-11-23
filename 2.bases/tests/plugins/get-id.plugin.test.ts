import {getId} from '../../src/plugins';

describe('plugins/get-id', () => {

    test('getId should return an uid', () => {
        
        const uid = getId();

        expect(typeof uid).toBe('string');
        expect(uid.length).toBe(36);
    });
});