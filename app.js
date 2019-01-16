var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    Measurement = require("./models/measurement"),
    User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/bf_db", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Temporary secret for public purpose",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.get("/", function (req, res) {
    res.render("landing")
});

// INDEX - show all measurements
app.get("/measurements", isLoggedIn, function (req, res) {
    Measurement.find({user: req.user.id}, function (err, userMeasurements) {
        if (err) {
            console.log(err)
        } else {
            res.render("measurements/index", {measurements: userMeasurements, currentUser: req.user})
        }
    });

});

// Add new measurement do DB
app.post("/measurements", isLoggedIn, function (req, res) {
    // Getting data from form
    var user = req.user.id;
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

    User.findById(req.user.id, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/measurements");
        } else {
            Measurement.create(newMeasurement, function (err, newlyCreated) {
                if (err) {
                    console.log(err);
                } else {
                    user.measurements.push(newlyCreated);
                    user.save();
                    res.redirect('/measurements/');
                }
            });
        }
    });

});

// NEW - Show for to create new measurement
app.get("/measurements/new", isLoggedIn, function (req, res) {
    res.render("measurements/new");
});

// SHOW - showing detail about specific measurement
app.get("/measurements/:id", isLoggedIn, function (req, res) {

    Measurement.findById(req.params.id, function (err, foundMeasurement) {
        if (err) {
            console.log(err)
        } else {
            // check if measurement belong to user that want to show it
            if (foundMeasurement.user === req.user.id) {
                res.render("measurements/show", {measurement: foundMeasurement});
            } else {
                res.redirect("measurements");
                console.log("Try to no permission access.")
            }
        }

    });

});

//=========================
// AUTH ROUTES
//=========================

//Show register form
app.get("/register", function (req, res) {
    res.render("register")
});

//Handle sign in logic
app.post("/register", function (req, res) {
    var newUser = new User({
        username: req.body.username,
        email: req.body.email
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("Register")
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/measurements");
        })
    });
});

// Show login form
app.get("/login", function (req, res) {
    res.render("login")
});

app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/measurements",
        failureRedirect: "/login"
    }), function (req, res) {

});

// Logic roure
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/")
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login")
    }
}

app.listen(3000, function () {
    console.log("The bodyfat server has started on port 3000. Press ctrl + C to disconnect");
});
