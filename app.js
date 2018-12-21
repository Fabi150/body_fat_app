var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/measurements", function (req, res){
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

    var measurements = [
        {user: "John", date: "13.11.86", weight: 74, neck: 41, waist:84, hips:102,
            shoulder:123, chest:97, arm_lef:37, arm_right:38, forearm_left:28, forearm_right:28, thigh_left:51, thigh_right:49, calve_left:42, calve_right:41, wrist_left:21, wrist_right:21,
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

    res.render("measurements", {measurements:measurements})
});
// Dodatkowy komentarz
app.listen(3000, function (){
    console.log("The bodyfat server has started on port 3000. Press ctrl + C to disconnect");
});
