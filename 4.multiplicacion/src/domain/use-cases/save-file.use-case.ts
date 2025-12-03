import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
};

export interface Options {
    fileName?: string,
    fileDestination?: string,
    fileContent: string
};


export class SaveFile implements SaveFileUseCase {

    constructor() {

    }

    execute({ fileName = 'table', fileContent, fileDestination = 'output' }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            
            console.log('File created');
            return true;

        } catch (error) {
            // console.error(error)  usar wiston para seguimiento de errores
            return false
        }
    }
}