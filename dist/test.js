"use strict";
// const CronJob = require('cron').CronJob;
// console.log('Before job instantiation');
// const job = new CronJob('0 */1 * * * *', function() {
// 	const d = new Date();
// 	console.log('Every Tenth Minute:', d);
// });
// console.log('After job instantiation');
// job.start();
var DB_Service = require('./service/db-service');
var start = function () {
    DB_Service.getAllClients('nam');
    // DB_Service.saveFromAmoCrm()
};
start();
