import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendLogsEmail } from "../domain/use-cases/send-email/send-log-email";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cronJob/cronService";
import { EmailService } from "./email/email.services";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

const emailService = new EmailService();



export class ServerApp {

    public static start() {

        console.log('server started');

        // todo enviar Emails
        new SendLogsEmail(
            emailService, fileSystemLogRepository
        ).execute(
            'fernando8715@hotmail.com'
        );

        // emailService.sendEmailWithFileSystemLogs('fernando8715@hotmail.com');
        // emailService.sendEmailWithFileSystemLogs(['fernando8715@hotmail.com', 'chinofer24@gmail.com']);

        // const url = 'http://localhost:3000/posts';
        // const url = 'https://google.com';
        // CronService.createJob(
        //     '*/3 * * * * *',
        //     () => {
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(`${url} is not working. ${error}`),

        //         ).execute(url);
        //     });
    }
}
