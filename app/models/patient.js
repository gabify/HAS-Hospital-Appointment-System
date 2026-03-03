const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = Schema({
    name: {
        type: String,
        require: true
    },
    birthdate: {
        type: Date,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
    },
    patientStatus: {
        type: String,
        require: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Patient', PatientSchema);