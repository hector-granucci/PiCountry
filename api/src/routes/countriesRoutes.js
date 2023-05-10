const { Router } = require('express');
const { getCountriesHandlers, getCountryId } = require('../handlers/handlerCountries.js')


const routerCountries = Router();


routerCountries.get('/', getCountriesHandlers)

routerCountries.get("/:idPais", getCountryId)


module.exports = routerCountries