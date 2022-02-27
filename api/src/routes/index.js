const { Router } = require('express');
const  countryRoute  = require('./Country')
const activityRoute = require('./Activity')
const regionsRoute = require('./Regions')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoute);
router.use('/activities', activityRoute);
router.use('/regions', regionsRoute);



module.exports = router;
