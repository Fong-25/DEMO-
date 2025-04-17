import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    location: String,
    email: String,
    service: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Booking", bookingSchema);