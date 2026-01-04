import { ServerApp } from '../src/presentation/Server';
import { envs } from './config/plugins/envs.plugins';

(() => {
    main();
})();


function main() {

    // console.log(envs);

    ServerApp.start();
}