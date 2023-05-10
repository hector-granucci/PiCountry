const postACT = require("../controllers/postACT")
const getActivity = require("../controllers/getActivity")




const  postActivity = async (req, res) => {
    const  {name,difficulty,duration,season}  = req.body
    try {
       const hola = await postACT({name,difficulty,duration,season})
        res.status(200).send("se creo correctamente")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getActivities = async(req, res) => {
    try {
        const getACT = await getActivity()
        res.status(200).json(getACT)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    postActivity,
    getActivities
}