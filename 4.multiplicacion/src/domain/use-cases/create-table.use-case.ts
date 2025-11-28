export interface CreateTableUseCase {
    execute: ( options : CreateTableOptions) => string
};

export interface CreateTableOptions {
    base: number,
    limit?: number,
}


export class CreateTable implements CreateTableUseCase {

    constructor() {
        /**
         * Dependency inyection
         */
    }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let result = '';

        for (let i = 1; i <= limit; i++) {
            result += `${base} X ${i} = ${base * i}\n`;
        };

        return result
    }
}