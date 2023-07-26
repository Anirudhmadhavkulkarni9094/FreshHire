const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    
    jobId: {
        type: String,
        required: true
    },
    role:{
        type : String,
        required : true
    },
    companyName: {
        type: String,
        required: true
    },
    location: { // Corrected the field name to use camelCase
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    description: { // Corrected the field name to use camelCase
        type: String,
        required: true,
    },
    requirement: { // Corrected the field name to use camelCase
        type: [String],
        required: true
    }
});

const JobPost = mongoose.model('job_listing', JobSchema); // Corrected the case of 'model' and 'exports'

module.exports = JobPost; // Corrected the case of 'exports'
