//Número total de personas
total = 20;
//Variable global listado de personas
personas = [];

//Genera una persona con datos aleatorios
//El API que lo genera es https://fakerjs.dev/api/
function crearPersona(){
    let persona = {
        "nombre":faker.name.findName(),
        "pais":faker.address.country(),
        "mes": faker.date.month()
    };
    
    return persona;
}


//Función que crea el listado de personas.
//Usa la variable global total 
//Inicaliza la variable global personas
function inicializarPersonas(){
    for(let i=0; i<total; i++){
        personas.push(crearPersona());
    }
    
}

//Invocamos la función para inicializar las personas
inicializarPersonas();