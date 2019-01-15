var mongoose = require("mongoose");
// SCHEMA SETUP FOR MEASUREMENT
var measurementSchema = new mongoose.Schema({
    user: String,
    date: String,
    weight: Number,
    neck: Number,
    waist: Number,
    hips: Number,
    shoulder: Number,
    chest: Number,
    arm_lef: Number,
    arm_right: Number,
    forearm_left: Number,
    forearm_right: Number,
    thigh_left: Number,
    thigh_right: Number,
    calve_left: Number,
    calve_right: Number,
    wrist_left: Number,
    wrist_right: Number,
    pectoral: Number,
    abdominal: Number,
    thigh: Number,
    triceps: Number,
    suprailiac: Number,
    chest_s: Number,
    midaxilary: Number,
    subscapula: Number,
    biceps: Number,
    calf: Number,
    lowerback: Number,
    annotations: String,
    img_front: String,
    img_side: String
});

module.exports = mongoose.model("Measurement", measurementSchema);