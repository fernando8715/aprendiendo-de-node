import fs from 'fs';
import { yarg } from './config/plugins/yarn.plugin';
import { CreateTable } from './domain/use-cases/create-table.use-case';

const { b: base, l: limit, s: showTable } = yarg;

const header: string = `
=============================
            Tabla ${base}
=============================\n
`;
let result: string = header;

const createTable = new CreateTable()
    .execute({ base, limit })

result = header + result;
if (showTable) console.log(result);


const path: string = 'output'
fs.mkdirSync(path, { recursive: true });
fs.writeFileSync(`output/tabla-${base}.txt`, result);
