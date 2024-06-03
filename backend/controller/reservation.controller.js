import { Reservation } from "../models/reservation.model.js";
import { ApiError } from "../utils/ApiError.js";

const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone, guest } = req.body;

    if (!firstName || !lastName || !email || !date || !time || !phone || !guest) {
        const error = new ApiError(400, "Please complete the reservation form.");
        res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
        return next(error);
    }

    try {
        await Reservation.create({ firstName, lastName, email, date, time, phone, guest });
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            const validationError = new ApiError(400, validationErrors.join(', '));
            res.status(validationError.statusCode).json({
                success: false,
                message: validationError.message,
            });
            return next(validationError);
        }
        const serverError = new ApiError(500, "An internal server error occurred");
        res.status(serverError.statusCode).json({
            success: false,
            message: serverError.message,
        });
        return next(serverError);
    }
};

export default sendReservation;