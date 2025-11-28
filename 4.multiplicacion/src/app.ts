import { yarg } from "./config/plugins/yarn.plugin";
import { serverApp } from "./presentation/server-app";
// console.log(process.argv);

// console.log(yarg);

(async()=> {
    await main();
    
})();

async function main() {
    
    const {b:base, l:limit, s:showTable, d:fileDestination, n:fileName } = yarg
    serverApp.run({base, limit, showTable, fileDestination, fileName }); 
    
}