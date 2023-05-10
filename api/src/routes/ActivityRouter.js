const { Router } = require('express');
const {postActivity, getActivities} = require("../handlers/handlerActivity")



const routerActivities = Router();


routerActivities.post('/', postActivity)

routerActivities.get("/", getActivities)


module.exports = routerActivities