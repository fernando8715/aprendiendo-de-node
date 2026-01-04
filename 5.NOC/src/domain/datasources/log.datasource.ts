/**
 * el datasource en la carpeta de domain son las reglas del negocio de como queremos que
 * funcione el origen de datos que puede ser una base de datos como postgress, mongo, entre otros.
 * 
 * Al Datasource solo accedo desde el reporitorio
 */

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


export abstract class LogDatasources {

    abstract saveLog( log: LogEntity): Promise<void>;
    abstract getLog(level: LogSeverityLevel): Promise<LogEntity[]>
}