const axios = require("axios")
const { Country } = require('../db')


const getCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const countries = response.data.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    image: country.flags.png,
    continent: country.continents[0],
    capital: country.capital ? country.capital[0] : "No tiene",
    subregion: country.subregion ? country.subregion : 'Sin Subregion',
    area: country.area,
    poblacion: country.population,
  }));
  await Country.bulkCreate(countries);
}


module.exports = { getCountries }