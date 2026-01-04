export enum LogSeverityLevel {
    low = 'low',
    medium = "medium",
    high = "high",
}

export interface LogEntityOptions {
    level: LogSeverityLevel,
    message: string,
    date?: Date,
    origin: string,
}


export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public date: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {

        const { message, level, date = new Date(), origin } = options;
        this.message = message;
        this.level = level;
        this.date = new Date();
        this.origin = origin;
    }

    // {"message": "hola mundo", "level": "low": "date": "381834"}
    static fromJson = (json: string): LogEntity => {
        const { message, level, date, origin } = JSON.parse(json);

        const log = new LogEntity({
            message,
            level,
            date,
            origin,
        });
        log.date = new Date(date);

        return log;
    }
}