const express = require('express')

const route = express.Router() 
const cors = require('cors');
const UserController  = require('../Controller/userController');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const User= require('../DataBase/Models/userModel');
const userController = require('../Controller/userController');
// get all users
// create user
route.post('/createuser', UserController.createuser);
route.post('/login', UserController.authenticate);
route.put('/update/:id', UserController.updateuser);
route.delete('/delete/:id', UserController.deleteuser);
route.get('/search',UserController.searchuser);
// route.get('/search/:firstName',UserController.searchuser);   si on veut chercher par un filter comme le nom

module.exports = route;