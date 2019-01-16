var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    born: String,
    gender: String,
    height: Number,
    units: String,
    timezone: Number,
    avatar: String,
    experience: Number,

    measurements: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Measurement"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);