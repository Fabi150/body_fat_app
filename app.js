var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bf_db");
//***************************************
// Measurement list
// Main circuits
//      user, date, weight, neck, waist, hips,
// Extended circuits
//      shoulder, chest, arm_lef, arm_right, forearm_left, forearm_right, thigh_left, thigh_right, calve_left, calve_right, wrist_left, wrist_right
// Skinfold
//      pectoral, abdominal, thigh, triceps, suprailiac, chest, midaxilary, subscapula, bicep, calf, lowerback
// Another
//      annotations
// Images
//      img_front, img_side
//**************************************

app.use(bodyParser.urlencoded({extend: true}));
app.set("view engine", "ejs");

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

var Measurement = mongoose.model("Measurement", measurementSchema);


//  var a1 =   {user: "John", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
//         shoulder:123, chest:97, arm_lef:37, arm_right:"38", forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
//         pectoral:11, abdominal:23, thigh:15, triceps:9, suprailiac:11, chest_s:8, midaxilary:13, subscapula:6, biceps:9, calf:6, lowerback:11,
//         annotations:"Typical measurements in the morning before breakfast", img_front:"Some URL", img_side:"Some URL"};
// var a2 =  {user: "Antony", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
//         shoulder:123, chest:97, arm_lef:37, arm_right:38, forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
//         pectoral:11, abdominal:23, thigh:15, triceps:9, suprailiac:11, chest_s:8, midaxilary:13, subscapula:6, biceps:9, calf:6, lowerback:11,
//         annotations:"Typical measurements in the morning before breakfast", img_front:"Some URL", img_side:"Some URL"};
// var a3 =  {user: "Gregory", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
//         shoulder:123, chest:97, arm_lef:37, arm_right:38, forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
//         pectoral:11, abdominal:23, thigh:15, triceps:9, suprailiac:11, chest_s:8, midaxilary:13, subscapula:6, biceps:9, calf:6, lowerback:11,
//         annotations:"Typical measurements in the morning before breakfast", img_front:"Some URL", img_side:"Some URL"};
//
// Measurement.create(a3, function (err, measurement) {
//    if(err){
//        console.log("Error accrued");
//        console.log(err);
//    } else {
//        console.log("Added measurement to DB");
//        console.log(measurement);
//    }
// });

app.get("/", function (req, res) {
    res.render("landing")
});

app.get("/measurements", function (req, res) {
    // Get all measurements form DB
    Measurement.find({}, function (err, allMeasurements) {
        if (err) {
            console.log(err)
        } else {
            res.render("measurements", {measurements: allMeasurements})
        }
    })
});

app.post("/measurements", function (req, res) {
    // Getting data from form
    var user = req.body.user;
    var date = req.body.date;
    var weight = req.body.weight;
    var neck = req.body.neck;
    var waist = req.body.waist;
    var hips = req.body.hips;
    var shoulder = req.body.shoulder;
    var chest = req.body.chest;
    var arm_lef = req.body.arm_lef;
    var arm_right = req.body.arm_right;
    var forearm_left = req.body.forearm_left;
    var forearm_right = req.body.forearm_right;
    var thigh_left = req.body.thigh_left;
    var thigh_right = req.body.thigh_right;
    var calve_left = req.body.calve_left;
    var calve_right = req.body.calve_right;
    var wrist_left = req.body.wrist_left;
    var wrist_right = req.body.wrist_right;
    var pectoral = req.body.pectoral;
    var abdominal = req.body.abdominal;
    var thigh = req.body.thigh;
    var triceps = req.body.triceps;
    var suprailiac = req.body.suprailiac;
    var chest_s = req.body.chest_s;
    var midaxilary = req.body.midaxilary;
    var subscapula = req.body.subscapula;
    var bicep = req.body.bicep;
    var calf = req.body.calf;
    var lowerback = req.body.lowerback;
    var annotations = req.body.annotations;
    var img_front = req.body.img_front;
    var img_side = req.body.img_side;

    var newMeasurement = {
        user: user,
        date: date,
        weight: weight,
        neck: neck,
        waist: waist,
        hips: hips,
        shoulder: shoulder,
        chest: chest,
        arm_lef: arm_lef,
        arm_right: arm_right,
        forearm_left: forearm_left,
        forearm_right: forearm_right,
        thigh_left: thigh_left,
        thigh_right: thigh_right,
        calve_left: calve_left,
        calve_right: calve_right,
        wrist_left: wrist_left,
        wrist_right: wrist_right,
        pectoral: pectoral,
        abdominal: abdominal,
        thigh: thigh,
        triceps: triceps,
        suprailiac: suprailiac,
        chest_s: chest_s,
        midaxilary: midaxilary,
        subscapula: subscapula,
        bicep: bicep,
        calf: calf,
        lowerback: lowerback,
        annotations: annotations,
        img_front: img_front,
        img_side: img_side,
    };
    // Create new measurement and save to DB
    Measurement.create(newMeasurement, function (err, newlyCreated) {
        if (err){
            console.log(err);
        } else {
            res.redirect("measurements")
        }

    });

});

app.get("/measurements/new", function (req, res) {
    res.render("new_measurement");
});

app.listen(3000, function () {
    console.log("The bodyfat server has started on port 3000. Press ctrl + C to disconnect");
});
