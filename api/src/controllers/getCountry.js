// const axios = require("axios")
const { Country, Activity } = require('../db')

const getCountry = async (idPais) => {
   const countri = await Country.findOne({
        where: {
            id: idPais.toUpperCase()
        },
        include: [{
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: { attributes: [] }
        }]
    })
    return countri
}

module.exports = getCountry