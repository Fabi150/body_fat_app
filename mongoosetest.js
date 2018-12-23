var mongoose = require("mongoose");
// const options = {
//     useNewUrlParser: true
// };
//
// mongoose.connect('mongodb://127.0.0.1:27017', options).then(()=>{
//     console.log("Connected");
// })
//     .catch((err)=>{
//         console.log("Error",err);
//         process.exit(1);
//     });
mongoose.connect("mongodb://127.0.0.1:27017/demo");

var dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

var Dog = mongoose.model("Dog", dogSchema);

var rudy = new Dog({
    name: "Rudy",
    age: 5,
    breed: "kundel"
});

// rudy.save(function (err, dog) {
//     if(err){
//         console.log("Some error")
//     }else {
//         console.log("Dog added to database");
//         console.log(dog);
//     }
// });

Dog.find(function (err, dogs) {
    if(err){
        console.log("error")
    }else{
        console.log("All dogs:");
        console.log(dogs);
    }
});