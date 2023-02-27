const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    number: {
        type: Number,
        min: 1,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    duplicate: {
        type: Boolean
    },
    date: {
        type: Date,
        required: true
    },
    attendees: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'attendee',
        required: true
    },
    attendees_number: {
        type: Number,
        set: this.Attendees.length,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'instructor',
        required: true
    }
}, {
    timestamps: true
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;