import {CreateTable} from '../../src/domain/use-cases/create-table.use-case';

describe('domain/create-table.use-case', () => {
    
    const createTable = new CreateTable();

    test('should create table with default values', () => {
        
        const table = createTable.execute({base: 2});
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 X 1 = 2');
        expect(table).toContain('2 X 10 = 20');
        expect(rows).toBe(10);
    });

    test('should create table with custom values', () => {
        
        const options = {
            base: 3,
            limit: 20
        }
        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect(table).toContain('3 X 1 = 3');
        expect(table).toContain('3 X 10 = 30');
        expect(table).toContain('3 X 20 = 60');
        expect(rows).toBe(options.limit);
    });

    

});

