const express = require('express')

const route = express.Router() 
const cors = require('cors');


const DemandeController = require('../Controller/demandeController');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const Demande = require('../DataBase/Models/demandeModel');


route.post('/createdemande',DemandeController.createdemande); //rdv
route.get('/search',DemandeController.searchdemande); // get all demandes rendez-vous
route.get('/searchrdv',DemandeController.searchrdv); // get all rendez-vous
// route.get('/searchdemandevalide',DemandeController.searchdemandevalide); // get all demandes validé
route.post('/validate/:id', DemandeController.validatedemande); // valider les rendez-vous en ajoutant id et date visite
// route.post('/suivie' ,DemandeController.suiviedemande)
// route.put('/update/:id',DemandeController.updatedemande);
route.delete('/delete/:id',DemandeController.deletedemande);


module.exports = route;