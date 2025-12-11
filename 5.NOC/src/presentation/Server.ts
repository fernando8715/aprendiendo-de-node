import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cronJob/cronService";


export class ServerApp {

    public static start() {

        console.log('server started');
        const url = 'https://google.com';
        CronService.createJob(
            '*/3 * * * * *',
            () => {
                new CheckService(
                    ()=> console.log('success'),
                    (error)=>console.log(error),                    
                    
                ).execute(url);
            });
    }
}
