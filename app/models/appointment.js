const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    doctorName: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    appointmentDate: {
        type: Date,
        require: true
    },
    appointmentStatus: {
        type: String,
        require: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Appointment', AppointmentSchema);