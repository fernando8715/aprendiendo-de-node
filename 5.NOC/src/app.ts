import { ServerApp } from '../src/presentation/Server';
import { envs } from './config/plugins/envs.plugins';
import { MongoDatabase } from './data/mongo';

(() => {
    main();
})();


async function main() {

    // console.log(envs);
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // ServerApp.start();
}