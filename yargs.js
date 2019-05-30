//Ejemplo para repositorio.

//Defino opciones
const nombre = {
	demand:true,
	alias:'n'
}

const matematicas = {
	demand:true,
	alias: 'm'
}

const ingles = {
	demand:true,
	alias: 'i'
}

const programacion = {
	demand : true,
	alias: 'p'
}

const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}

const muestraest = {
	nombre
}

//manejo de yargs
const argv = require('yargs')
	.command('crear','Crear un estudiante', creacion)
	.command('mostrar','Muestra el estudiante y sus notas')
	.command('mostrarest','Muestra el estudiante y sus notas', muestraest)
	.command('mostrarmat','Muestra estudiantes que ganan')
	.command('mostrarpromedioalto','Muestra estudiantes con promedio superior a 3')
	.argv;

//permito exportación de la función y la constante
module.exports = {
	argv
};