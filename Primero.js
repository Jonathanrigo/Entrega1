
let promedio=(nota1, nota2, nota3, callback)=>{
    setTimeout(function() {
        let resultado=(nota1+nota2+nota3)/3
        callback (resultado);
    }, 0);
   
}
promedio(5,4,2, function(resultado){
    console.log(resultado);
})

