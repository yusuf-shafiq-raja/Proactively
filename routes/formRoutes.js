const express = require('express');
const router = express.Router();
const formController = require('controllers/formController');

router.post('/', formController.createForm);
router.get('/:id', formController.getForm);
router.patch('/:id/response', formController.updateResponse);

module.exports = router;
