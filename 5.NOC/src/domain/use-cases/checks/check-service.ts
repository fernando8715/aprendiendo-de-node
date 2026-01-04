import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;


export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ) { };

    public async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);
            if (!req) {
                throw new Error(`${url} esta fallando`);
            };

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: `${url} is working`,
                origin: 'check-service.ts'
            });
            this.logRepository.saveLog(log);
            this.successCallback && this.successCallback();

            return true;

        } catch (error) {
            const errorMessage = `${url} is not working. ${error}`;
            const log = new LogEntity({
                message: errorMessage,
                level: LogSeverityLevel.high,
                origin: 'check-service.ts'
            });
            this.logRepository.saveLog(log);

            this.errorCallback && this.errorCallback(`${error}`)
            return false
        }
    }

};  