
const valide = (input) => {
    let errors ={};
    if(!input.name){
        errors.name = "se requiere un nombre para la actividad"
    }
    if(!input.difficulty){
        errors.difficulty = "se requiere un numero de dificultad"
    }
    else if (input.difficulty < 1 || input.difficulty > 5){
        errors.difficulty = "colocar un numero del 1 al 5"
    }
    if(!input.duration){
        errors.duration = "se require una duracion"
    }
    if(!input.season){
        errors.season= "porfavor selecione una season"
    }
    if (input.countries.length === 0) {
        errors.countries = "Por favor, selecciona al menos un país";
      }
    
    return errors;
}

export default valide