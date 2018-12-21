var express = require("express");
var app = express();
var bodyParser = require("body-parser");

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

var measurements = [
    {user: "John", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
        shoulder:123, chest:97, arm_lef:37, arm_right:"38", forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
        pectoral:11, abdominal:23, thigh:15, triceps:9, suprailiac:11, chest_s:8, midaxilary:13, subscapula:6, biceps:9, calf:6, lowerback:11,
        annotations:"Typical measurements in the morning before breakfast", img_front:"Some URL", img_side:"Some URL"},
    {user: "Antony", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
        shoulder:123, chest:97, arm_lef:37, arm_right:38, forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
        pectoral:11, abdominal:23, thigh:15, triceps:9, suprailiac:11, chest_s:8, midaxilary:13, subscapula:6, biceps:9, calf:6, lowerback:11,
        annotations:"Typical measurements in the morning before breakfast", img_front:"Some URL", img_side:"Some URL"},
    {user: "Gregory", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
        shoulder:123, chest:97, arm_lef:37, arm_right:38, forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
        pectoral:11, abdominal:23, thigh:15, triceps:9, suprailiac:11, chest_s:8, midaxilary:13, subscapula:6, biceps:9, calf:6, lowerback:11,
        annotations:"Typical measurements in the morning before breakfast", img_front:"Some URL", img_side:"Some URL"},
];


app.get("/", function(req, res){
    res.render("landing")
});

app.get("/measurements", function (req, res){
    res.render("measurements", {measurements:measurements})
});

app.post("/measurements", function (req, res){
    // Getting data from form
    var user            = req.body.user          ;
    var date            = req.body.date          ;
    var weight          = req.body.weight        ;
    var neck            = req.body.neck          ;
    var waist           = req.body.waist         ;
    var hips            = req.body.hips          ;
    var shoulder        = req.body.shoulder      ;
    var chest           = req.body.chest         ;
    var arm_lef         = req.body.arm_lef       ;
    var arm_right       = req.body.arm_right     ;
    var forearm_left    = req.body.forearm_left  ;
    var forearm_right   = req.body.forearm_right ;
    var thigh_left      = req.body.thigh_left    ;
    var thigh_right     = req.body.thigh_right   ;
    var calve_left      = req.body.calve_left    ;
    var calve_right     = req.body.calve_right   ;
    var wrist_left      = req.body.wrist_left    ;
    var wrist_right     = req.body.wrist_right   ;
    var pectoral        = req.body.pectoral      ;
    var abdominal       = req.body.abdominal     ;
    var thigh           = req.body.thigh         ;
    var triceps         = req.body.triceps       ;
    var suprailiac      = req.body.suprailiac    ;
    var chest_s         = req.body.chest_s       ;
    var midaxilary      = req.body.midaxilary    ;
    var subscapula      = req.body.subscapula    ;
    var bicep           = req.body.bicep         ;
    var calf            = req.body.calf          ;
    var lowerback       = req.body.lowerback     ;
    var annotations     = req.body.annotations   ;
    var img_front       = req.body.img_front     ;
    var img_side        = req.body.img_side      ;

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

    measurements.push(newMeasurement);

    // Redirect to measurements page
    res.redirect("measurements")
});

app.get("/measurements/new", function (req, res){
    res.render("new_measurement");
});

app.listen(3000, function (){
    console.log("The bodyfat server has started on port 3000. Press ctrl + C to disconnect");
});
