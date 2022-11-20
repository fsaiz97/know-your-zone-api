const { Router } = require('express');

const demoController = require('../controllers/demoController.js');

const demoRouter = Router(); 

demoRouter.get('/:borough/ethnicity', demoController.showEthnicity); 
demoRouter.get('/:borough/religion', demoController.showReligion);
demoRouter.get('/:borough/wellbeing', demoController.showWellbeing);
demoRouter.get('/:borough/age', demoController.showAge);
demoRouter.get('/:borough/sex', demoController.showSex);
demoRouter.get('/:borough/household', demoController.showHousehold);

module.exports = demoRouter;
