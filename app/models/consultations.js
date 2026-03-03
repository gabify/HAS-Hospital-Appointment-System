const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConsultationSchema = Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    diagnosis: {
        type: String,
        require: true
    },
    prescription: {
        type: String,
        require: true
    },
    notes: {
        type: String,
        require: true,
    },
}, {timestamps: true})


module.exports = mongoose.model('Consultation', ConsultationSchema);