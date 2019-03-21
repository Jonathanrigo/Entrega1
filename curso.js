const { cursos } = require('./entrega1');
const fs = require('fs');
const express = require('express')
const app = express()
 

let mostrarCursos = () => {
    let { ecuaciones: { codigo, nombre, duracion, valor } } = cursos;
    setTimeout(function () {
        console.log('el codigo del curso es ' + codigo);
        console.log('el nombre del curso es ' + nombre);
        console.log('la duracion del curso es ' + duracion);
        console.log('el valor del curso es ' + valor + "\n");
    }, 2000);

    let { electricidad: { codigo1, nombre1, duracion1, valor1 } } = cursos;
    setTimeout(function () {
        console.log('el codigo del curso es ' + codigo1);
        console.log('el nombre del curso es ' + nombre1);
        console.log('la duracion del curso es ' + duracion1);
        console.log('el valor del curso es ' + valor1 + "\n");
    }, 4000)

    let { estadistica: { codigo2, nombre2, duracion2, valor2 } } = cursos;
    setTimeout(function () {
        console.log('el codigo del curso es ' + ' ' + codigo2);
        console.log('el nombre del curso es ' + ' ' + nombre2);
        console.log('la duracion del curso es ' + ' ' + duracion2);
        console.log('el valor del curso es ' + ' ' + valor2);
    }, 6000);
}

let insertar = () => {
    setTimeout(function () {
        const opciones = {
            id: {
                demand: true,
                alias: 'i'
            },
            nombre: {
                demand: true,
                alias: 'n'
            },
            cedula: {
                demand: true,
                alias: 'c'
            }
        }
        const argv = require('yargs')
            .command('inscribir', 'Inscribirme en un curso', opciones)
            .argv
        if (argv.id == 12 || argv.id == 13 || argv.id == 14) {
             crearArchivo(argv.id, argv.nombre, argv.cedula);
        } else {
            if (argv.id == null) {
                mostrarCursos();
            } else {
                console.log("curso no existe compruebe que el id que sea el correcto (12,13,14)");
                console.log("por tanto no puede inscribirse");
            }
        }
        xx = 0;
    }, 0)
}
insertar();

let crearArchivo = (ii, nn, cc) => {
    setTimeout(function () {

        if (ii == 12) {
            texto = 'el estudiante ' + ' ' + nn + '\n' +
                'con cedula' + ' ' + cc + '\n' +
                'se ha matriculado en el curso' + ' ' + ii + '\n' +
                'la duracion del curso es 48' + '\n' +
                'el valor del curso es 2000';
        }
        if (ii == 13) {
            texto = 'el estudiante ' + ' ' + nn + '\n' +
                'con cedula' + ' ' + cc + '\n' +
                'se ha matriculado en el curso' + ' ' + ii + '\n' +
                'la duracion del curso es 50' + '\n' +
                'el valor del curso es 2000';
        }
        if (ii == 14) {
            texto = 'el estudiante ' + ' ' + nn + '\n' +
                'con cedula' + ' ' + cc + '\n' +
                'se ha matriculado en el curso' + ' ' + ii + '\n' +
                'la duracion del curso es 64' + '\n' +
                'el valor del curso es 2000';
        }
        app.get('/', function (req, res) {
            res.send(texto)
          })
           
        app.listen(3000)
        /*fs.writeFile('matriculados.txt', texto, (err) => {
            if (err) throw (err);
            console.log(+'\n')
            console.log('se ha creado el archivo satisfactoriamente y te has matriculado al curso')
        }
        )*/;
    }, 3000);
}


