const express= require('express');
const app = express ();
const bodyparser = require('body-parser');
const userRouter = require('./Router/UserRouter');
const DemandeRouter = require ('./Router/DemandeRouter');
app.use(express.json());
const mongoose= require('./database/mongoose');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT, DELETE ,CONNECT ");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Accept, " +
       "x-client-key, x-client-token, x-client-secret, Authorization , X-Auth-token , " +
       "Content-Type,  Accept,* ");

    next();
});


app.use('/users', userRouter);
app.use('/demandes',DemandeRouter);

app.listen(5000 , function(){console.log("server started on port 5000")});