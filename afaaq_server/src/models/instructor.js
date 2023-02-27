const mongoose = require("mongoose");
const validator = require("validator");

const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        validate: (value) => {
            if (!validator.isMobilePhone(value, "ar-EG")) {
                throw new Error("phone number is invalid");
            } 
        }
    }
}, {
    timestamps: true
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;