const express = require('express');
const router = express.Router();

const {createBilling, getBillingHistoryUsingPatientId, markBillingAsPaid} = require('../controllers/billing-controller');

router.post('/', createBilling);
router.get('/:patientId', getBillingHistoryUsingPatientId);
router.put('/:billingId/mark-paid', markBillingAsPaid);
module.exports = router;