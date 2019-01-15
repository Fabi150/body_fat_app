RESTful routes:

name     url                  method  desc
=========================================================================
INDEX    /measurements        GET     Display list of all measurements
NEW      /measurements/new    GET     Display form to create new measurement
CREATE   /measurements        POST    Add new measurement to DB
SHOW     /measurements/:id    GET     Show detail about specific measurement


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
