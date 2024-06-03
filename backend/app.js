import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from "./routes/reservation.routes.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/reservation", reservationRouter);

export default app;