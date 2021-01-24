const express = require('express');
const router = express.Router();
const allRecordFilterValidation = require('../../validations/routes/allRecordFilterValidation');
const recordController = require('../../controllers/recordController');


router.post('/list', [allRecordFilterValidation], recordController.listRecord);


module.exports = router;