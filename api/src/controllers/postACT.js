const {Activity } = require('../db')

const postACT = ({name,difficulty,duration,season}) => {
  const post ={
    name,
    difficulty,
    duration,
    season,
  }
  const newActivity = Activity.create(post)
  return newActivity
}

module.exports= postACT