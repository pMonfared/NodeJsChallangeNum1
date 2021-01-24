const express = require('express');
const router = express.Router();
const allRecordFilterValidation = require('../../validations/routes/allRecordFilterValidation');
const recordController = require('../../controllers/recordController');


router.post('/', [allRecordFilterValidation], recordController.listRecord);


module.exports = router;