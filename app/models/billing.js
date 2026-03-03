const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillingSchema = Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    serviceDescription: {
        type: String,
        require: true
    },
    amount: {
        type: mongoose.Types.Decimal128,
        require: true
    },
    dateIssued:{
        type: Date,
        require: true,
    },
    billingStatus: {
        type: String,
        require: true,
    },
}, {timestamps: true})


module.exports = mongoose.model('Billing', BillingSchema);