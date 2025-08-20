import * as dotenv from "dotenv"
let envType = process.env.ENV || "orangeHrmLive";

export const getEnv = () => {
    dotenv.config({
        override: true,
        path: "./src/test/helper/env/.env." + envType 
    })
}