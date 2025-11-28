import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string
};

export class serverApp {

    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        console.log('Server running ...');

        const table = new CreateTable()
            .execute({ base, limit });

        const wasSave = new SaveFile()
            .execute({
                fileContent: table,
                fileDestination,
                fileName
            });

        if (showTable) console.log(table);
    }
}