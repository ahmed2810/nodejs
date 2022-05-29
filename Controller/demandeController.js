const Demande = require('../DataBase/Models/demandeModel');
module.exports = {



    createdemande: async (req, res) => {
        const{idUser,city,refService,refSubservice,dateRdv} =req.body

        if (!idUser ||!city || !refService || !refSubservice || !dateRdv  ) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const demande = await Demande.findOne({ dateRdv });
            if (demande) throw Error("rendez vous déja pris ");
            
            

            const newDemande = new Demande({idUser,city,refService,refSubservice,dateRdv});


            const savedDemande = await newDemande.save();
        
          
            if (!savedDemande) throw Error("Something went wrong saving the demand");

            /* const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
              expiresIn: 3600,
            }); */

            res.status(200).json({

                demande: savedDemande,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    validatedemande: async (req,res)=>{
        Demande.findByIdAndUpdate({_id : req.params.id}, {$set : req.body},(err , demande) => {
            if(!demande){
                res.status(500).json({
                    message:"demande is not updated" +err ,
                    data: null,
                });
            }else {
                res.status(200).json({
                    message:"demande is successfully updated" ,
                    data: null,
                });
            }

        });
    



   
    },
   
   
   
    // updatedemande: async (req,res)=>{
    //     User.findByIdAndUpdate({_id : req.params.id}, {$set : req.body},(err , demande) => {
    //         if(!demande){
    //             res.status(500).json({
    //                 message:"demande is not updated" +err ,
    //                 data: null,
    //             });
    //         }else {
    //             res.status(200).json({
    //                 message:"demande is successfully updated" ,
    //                 data: null,
    //             });
    //         }

    //     });
    



   
    // },



    deletedemande: async (req,res)=>{
        Demande.findByIdAndDelete({_id : req.params.id},{$set : req.body},(err , demande) => {
            if(!demande){
                res.status(500).json({
                    message:"demande is not deleted" +err ,
                    data: null,
                });
            }else {
                res.status(200).json({
                    message:"demande is successfully deleted" ,
                    data: null,
                });
            }

        });
    



    },

    searchrdv:(req, res) =>{
     
       
        try {
            
            const  cont= Demande.find({numRecu : null} , (err ,demande)=>{
              
                res.status(200).send(demande)
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    // searchdemandevalide:(req, res) =>{
    //     try {
           
    //             const  cont= Demande.find({numRecu: !null} , (err ,demande)=>{
    //             res.status(200).send(demande)
    //         });
    //     } catch (e) {
    //         res.status(400).json({ error: e.message });
    //     }
    // },





    searchdemande:(req, res) =>{
        try {
            // const  cont= User.find({firstName: req.params.firstName} , (err ,user)=>{// si on veut chercher par un filter comme le nom
                const  cont= Demande.find({} , (err ,demande)=>{
                res.status(200).send(demande)
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

   














}