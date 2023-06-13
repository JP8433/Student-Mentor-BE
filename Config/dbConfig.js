const mongodb = require("mongodb");
const Mongoclient = mongodb.Mongoclient;
const dbName="assignMentor"
const dbUrl=`mongodb+srv://jaypatelin9167:Jay8433$@cluster0.ywmzkye.mongodb.net/?retryWrites=true&w=majority`
module.exports={dbUrl,mongodb,Mongoclient};
