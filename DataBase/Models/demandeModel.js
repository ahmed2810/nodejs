const mongoose = require('mongoose')

// const uniqueValidator = require('mongoose-unique-validator')


const demandeSchema = mongoose.Schema ({


idUser        :{type : String ,required :true },
city          :{type : String ,required :true },
refService    :{type : String ,required :true },
refSubservice :{type : String ,required :true },
dateRdv       :{type : String ,required :true },
numRecu       :{type : Number ,default :null },
dateVisite    :{type : String  ,default :null },
statut        :{type : Number ,default :null }, // 0:en attente ,1:accepté , 2:refusé
motifDemande  :{type : String ,default :null }, // champ pour description final 
idagent       :{type : String ,default :null },
datecreate    :{type : Date   ,default :Date.now}

})

// demandeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Demandes", demandeSchema)