import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';
import { ServerApp } from '../../src/presentation/server-app';

describe('test server-app', () => {

    const options = {
        base: 2,
        limit: 5,
        showTable: false,
        fileName: 'test-fileName',
        fileDestination: 'test-fileDestination',
    }


    test('should create serverApp instance', () => {

        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    // test('should run server app with options', () => {

    //     const logSpy = jest.spyOn(console, 'log');
    //     const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    //     const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

    //     ServerApp.run(options);

    //     expect(logSpy).toHaveBeenCalledWith('Server running ...');
    //     expect(logSpy).toHaveBeenLastCalledWith('File created');

    //     expect(createTableSpy).toHaveBeenCalledTimes(1);
    //     expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

    //     expect(saveFileSpy).toHaveBeenCalledTimes(1);
    //     expect(saveFileSpy).toHaveBeenCalledWith({
    //         fileContent: expect.any(String),
    //         fileDestination: options.fileDestination,
    //         fileName: options.fileName
    //     });
    //     expect(saveFileSpy).toHaveBeenCalledWith(expect.objectContaining({
    //         fileContent: expect.any(String),
    //     }));

    // });

    test('should run serverApp with values mock', () => {
        
        const createTableMock = jest.fn().mockReturnValue('1 x 1 = 1');
        const saveFileMock = jest.fn();
        const logMock = jest.fn();
        const errorLogMock = jest.fn();

        console.log = logMock;
        console.error = errorLogMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);
        expect(createTableMock).toHaveBeenCalledWith({base: options.base, limit: options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.fileDestination,
            fileName: options.fileName,
        });
        expect(logMock).toHaveBeenCalledWith('Server running ...');
        expect(errorLogMock).not.toHaveBeenCalled();

    });
}); 