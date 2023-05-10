const { getCountries } = require("../controllers/getCountries.js")
const getCountry = require("../controllers/getCountry.js")
const getCountryName = require ("../controllers/getCountryName.js")


const getCountriesHandlers = async (req, res) => {
    const  {name}  = req.query
    try {
        if(name){
            const countryName = await getCountryName(name)
            res.status(200).json(countryName)
        } else {
        const countries = await getCountries()
        res.status(200).json(countries)}
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCountryId = async (req, res) => {
    const {idPais} = req.params
    try {
        const country = await getCountry(idPais)
        res.status(200).json(country)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getCountriesHandlers,
    getCountryId,
}
