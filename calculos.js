let estudiante = {
    nombre:'juan', 
    edad: 25, 
    notas:{
        matematicas: 3, 
        ingles:4, 
        programacion:5
    }
};
let obtenerPromedio = (n1, n2, n3)=> (n1+n2+n3)/3;

module.exports = {
    estudiante,
    obtenerPromedio
};