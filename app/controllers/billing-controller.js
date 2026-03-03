const Billing = require('../models/billing');

const createBilling = async (req, res) =>{
    const {
        patientId, serviceDescription, amount, dateIssued, billingStatus
    } = req.body;

    try{
        const billing = await Billing.create({
            patientId, serviceDescription, amount, dateIssued, billingStatus
        });
        res.status(200).json(billing);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

const getBillingHistoryUsingPatientId = async(req, res) =>{
    const {patientId} = req.params; 
    try{
        const billings = await Billing.find({patientId});
        res.status(200).json(billings);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

const markBillingAsPaid = async(req, res) =>{
    const {billingId} = req.params;
    try{
        const billing = await Billing.findByIdAndUpdate(
            billingId,
            {billingStatus: 'Paid'},
            {new: true}
        );
        res.status(200).json(billing);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createBilling,
    getBillingHistoryUsingPatientId,
    markBillingAsPaid
}