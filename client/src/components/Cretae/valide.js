
const valide = (input) => {
    let errors ={};
    if(!input.name){
        errors.name = "A name is required for the activity "
    }
    if(!input.difficulty){
        errors.difficulty = "A difficulty number is required"
    }
    else if (input.difficulty < 1 || input.difficulty > 5){
        errors.difficulty = "Put a number from 1 to 5"
    }
    if(!input.duration){
        errors.duration = "A duration is required"
    }
    if(!input.season){
        errors.season= "Please select a season"
    }
    if (input.countries.length === 0) {
        errors.countries = "Please select at least one country";
      }
    
    return errors;
}

export default valide