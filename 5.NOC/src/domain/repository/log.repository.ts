/**
 * El LogRepository me va a permitir llamar metodos que se encuentran en el DataSource,
 * porque nosotros no llegamos directamente al datasource, sino mediante el repositorio,
 * 
 * Desde el repositorio puedo acceder al Datasource
 */

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";



export abstract class LogRepository {

    abstract saveLog( log: LogEntity): Promise<void>;
    abstract getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]>
}