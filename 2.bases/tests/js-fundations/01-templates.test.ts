import {templateEmail} from '../../src/js-fundations/01-template'

describe('js-fundation/01-templates', () => {
    
    test('templateEmail should contain a greeting', () => {

        expect(templateEmail).toContain('Hi, ')
    });

    test('templateEmail should contain {{name}} and {{orderId}}', () => {
        
        expect(templateEmail).toMatch(/{{name}}/);
        expect(templateEmail).toMatch(/{{orderId}}/);
    });
});