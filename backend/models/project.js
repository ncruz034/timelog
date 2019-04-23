const mongoose = require('mongoose');
const Joi = require('Joi');


const Project = mongoose.model('Project',new mongoose.Schema({
   
    projectName: {type:String, required:true},
    client_id: {type:String, required:true},
    clientName: {type: String, required: true},
    date:{type: Date, default: Date.now},
    description:{type:String, required:true}, 
    status: {type:String, required:true},
    /* order: [{type: mongoose.Schema.ObjectId, ref:'Order'}], */
    }));


function validateProject(project){
    const schema = {
        projectName: Joi.string().required(),
        client_id: Joi.string().required(),
        clientName: Joi.string().required(),
        date: Joi.date().required(),
        description: Joi.string().required(),
        status: Joi.string().required()
    };

    return Joi.validate(project, schema);
    //check if there is any error
}

exports.Project = Project;
exports.validate = validateProject;