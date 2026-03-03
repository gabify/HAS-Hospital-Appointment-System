const Consultation = require('../models/consultations');

const createConsultation = async (req, res) =>{
    const {patientId, appointmentId, diagnosis, prescription, notes} = req.body;

    try{
        const consultation = await Consultation.create({
            patientId, appointmentId, diagnosis, prescription, notes
        });
        res.status(200).json(consultation);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

const getConsultationHistoryUsingPatientId = async(req, res) =>{
    const {patientId} = req.params;
    try{
        const consultations = await Consultation.find({patientId});
        res.status(200).json(consultations);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createConsultation,
    getConsultationHistoryUsingPatientId
}