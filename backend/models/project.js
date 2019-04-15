const mongoose = require('mongoose');
const Joi = require('Joi');


const Project = mongoose.model('Project',new mongoose.Schema({
    projectName: {type:String, required:true},
    date:{type: Date, default: Date.now},
    description:{type:String, required:true}, 
    status: {type:String, required:true},
    order: [{type: mongoose.Schema.ObjectId, ref:'Order'}],
    }));


function validateProject(project){
    const schema = {
        projectName: Joi.string().require(),
        date: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.string().required()
    };

    return Joi.validate(project, schema);
    //check if there is any error
}

exports.Project = Project;
exports.validate = validateProject;