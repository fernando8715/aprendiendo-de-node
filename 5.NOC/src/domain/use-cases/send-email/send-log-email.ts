import { EmailService } from "../../../presentation/email/email.services";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogsEmailUseCase {
    execute: (to: string | string[]) => Promise<boolean>
}

export class SendLogsEmail implements SendLogsEmail {

    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository,
    ) { }

    async execute(to: string | string[]) {

        try {
            const sent = await this.emailService.sendEmailWithFileSystemLogs(to)
            if (!sent) {
                throw new Error('Email not send');
            }

            const log = new LogEntity(
                {
                    message: `Email was send`,
                    level: LogSeverityLevel.low,
                    origin: 'SendLogsEmail.ts',
                }
            )
            this.logRepository.saveLog(log)

            return true;

        } catch (error) {

            const log = new LogEntity(
                {
                    message: `${error}`,
                    level: LogSeverityLevel.high,
                    origin: 'SendLogsEmail.ts',
                }
            )
            this.logRepository.saveLog(log)
            return false;
        }

        return true;
    }

}