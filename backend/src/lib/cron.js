import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {

    https.get(process.env.API_URL, (res) => {
        if(res.statusCode === 200){
            
            console.log("GET request sent successfully");

        }
        else{

            console.log("GET request failed", res.statusCode);
        
        }
    }).on("error", (e) => console.error("Error while sending request", e));

});

export default job;

// CRON JOBS scheduled tasks that run periodically at fixed intervals
// we want to send 1 GET request for every 14 min

// define schedule using cron expression

//* 14 * * * *              14 min
//* 0 0 * * 0               midnight every sunday
//* 30 3 15 * *             at 3:30am on the 15 of every month
//* 0 0 1 1 *               midnight on jan 1
//* 0 * * * *               every hour