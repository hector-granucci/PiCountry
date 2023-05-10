const { Activity } = require('../db')

const getActivity = async () => {
    const act = await Activity.findAll()
    return act
}


module.exports = getActivity