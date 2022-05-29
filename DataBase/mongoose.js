const mongoose = require('mongoose');
const {connect} = require("mongoose");




mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://admin:admin@cluster0.4riqb.mongodb.net/?retryWrites=true&w=majority' , {useNewUrlParser : true , useUnifiedTopology : true })
    .then(() => {console.log("Db connected successfuly!")
    })
    .catch((error) => {console.log("Error occurued while DB Connexion" ,error)
    });
module.exports=mongoose;
