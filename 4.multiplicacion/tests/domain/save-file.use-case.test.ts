import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';
import fs, { mkdirSync } from 'fs';

describe('domain/save-file.use-case', () => {

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name',
    };

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    // clean up
    afterAll(() => {
        const outputFolderExist = fs.existsSync('output');
        if (outputFolderExist) fs.rmSync('output', { recursive: true });

        const customOutputsFolderExist = fs.existsSync(customOptions.fileDestination);
        if (customOutputsFolderExist) fs.rmSync('custom-outputs', { recursive: true });
    });

    test('should create file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'output/table.txt';
        const options = {
            fileContent: 'test content',
        };

        const file = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect(file).toBeTruthy();
        expect(fileExist).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);
    });


    test('should save file with custom values', () => {

        const saveFile = new SaveFile();
        saveFile.execute(customOptions);

        const fileExist = fs.existsSync(customOptions.fileDestination);
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });;

        expect(saveFile).toBeTruthy();
        expect(fileExist).toBeTruthy();
        expect(fileContent).toBe(customOptions.fileContent);
    });

    test('should return false with a directory could not created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('simalación de error al crear el directorio')
        });
        const result = saveFile.execute({fileContent: 'content file'});
        
        expect(result).toBeFalsy();

        // la funcion mockRestore restaura los valores de la implementacion original.
        mkdirSpy.mockRestore();
    });

    test('should return false with a file could not created', () => {
        
        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(()=>{
            throw new Error('Simulación del error al crear el archivo')
        });
        
        const result = saveFile.execute({fileContent: 'content file'});
        expect(result).toBeFalsy();

        writeFileSpy.mockRestore();
    });
});