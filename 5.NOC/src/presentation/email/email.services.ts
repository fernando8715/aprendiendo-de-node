import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


interface SendMailOptions {
    to: string | string[],
    subject: string,
    text: string,
    htmlBody: string,
    attachments?: Attachment[],
}

interface Attachment {
    filename: string,
    path: string,
}



export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    constructor() { }


    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, text, htmlBody, attachments = [] } = options;

        try {

            const sendInformation = await this.transporter.sendMail({
                to,
                subject,
                text,
                html: htmlBody,
                attachments,
            })

            return true;

        } catch (error) {

            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Sistema de logs de NOC';
        const text = 'enviando los archivos de los logs';
        const htmlBody = `
        <h1>Logs de NOC</h1>
        <p>archivos de logs generados desde la app de NOC</p>
        <p>archivos adjuntos</p>
        `;
        const attachments: Attachment[] = [
            { filename: 'logs-all', path: './logs/logs-all.log' },
            { filename: 'logs-high', path: './logs/logs-high.log' },
            { filename: 'logs-medium', path: './logs/logs-medium.log' },
        ];

        return this.sendEmail({
            to, subject, text, htmlBody, attachments
        });
    }
}