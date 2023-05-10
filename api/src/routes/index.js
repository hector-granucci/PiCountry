const { Router } = require('express');
const routerCountries = require('./countriesRoutes.js')
const routerActivities = require("../routes/ActivityRouter.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', routerCountries)

router.use("/activities", routerActivities)

module.exports = router;
