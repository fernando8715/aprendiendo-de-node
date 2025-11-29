import {SaveFile} from '../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';

describe('domain/save-file.use-case', () => {
    
    // clean up
    afterEach(()=>{
        fs.rmSync('output', {recursive: true})
    });

    test('should create file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'output/table.txt';
        const options = {
        fileContent : 'test content',
        };

        const file = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(file).toBeTruthy();
        expect(fileExist).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);
    });
});