import { Router } from "express";
import sendReservation from "../controller/reservation.controller.js";

const router = Router();

router.post("/send", sendReservation);

export default router;