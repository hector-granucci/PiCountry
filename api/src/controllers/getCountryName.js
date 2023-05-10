const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const getCountryName = async (name) => {
    const countryName = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%`}
        },
        include: [{
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: { attributes: [] }
        }]
    })
    return countryName
}

module.exports = getCountryName