import app from "./app.js";
import dotenv from "dotenv";
import ConnectDB from "./database/index.js";

dotenv.config({
    path: './.env'
})

ConnectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("The following error occured: ", error);
            throw error
        })
        app.listen(process.env.PORT || 4000, () => {
            console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed, The following error occured: ", err)
    })