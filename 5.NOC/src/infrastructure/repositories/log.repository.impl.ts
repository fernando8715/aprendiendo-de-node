import { LogDatasources } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";


export class LogRepositoryImpl implements LogRepository {


    constructor(
        // colocar el logDatasource como argumento es igual que crearla como propiedad fuera del constructor e inicializarlo dentro del constructor con el this, nos ahorramos unas lineas de codigo.
        private readonly logDatasource : LogDatasources, // se recibe el tipo de datasource, ya sea postgress, mysql, mongo, etc.
    ){}


    async saveLog(log: LogEntity): Promise<void> {
        this.logDatasource.saveLog(log)
    }
    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLog( severityLevel )
    }
    
}