import { CronJob } from 'cron';

type CronTime = string | Date;
type onTick = () => void;


export class CronService {

    static createJob(crownTime: CronTime, onTick: onTick): CronJob {
        
        const job = new CronJob(crownTime, onTick);

        job.start();

        return job;
    }

};
