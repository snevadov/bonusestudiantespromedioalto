//requiero filesystem
const fs = require('fs');

//Defino lista de estudiantes
listaEstudiantes = [];

//Funciòn para crear el estudiante
const crear = (estudiante) => {
	listar();
	let est = {
		nombre: estudiante.nombre,
		matematicas: estudiante.matematicas,
		ingles: estudiante.ingles,
		programacion: estudiante.programacion
	};

	//Valido que no permita guardar duplicados
	let duplicado = listaEstudiantes.find(nom => nom.nombre === estudiante.nombre);
	if(!duplicado)
	{
		listaEstudiantes.push(est);

		console.log(listaEstudiantes);
		guardar();
	}
	else
	{
		console.log("Ya existe otro estudiante con ese nombre");
	}


}

//Función con la que obtengo el listado de estudiantes
const listar = () => {
	try{
		//Se puede usar require o JSON.parse

		//Require trae la variable y permanece más en el tiempo
		listaEstudiantes = require('./listado.json');

		//JSON.parse para manera asincrónica
		//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
	} 
	catch(error){
		//Si no hay nada, inicia vacía
		listaEstudiantes = [];
	}
}

//Función para almacenar en archivo
const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err)=>{
		if(err) throw (err);
		console.log('Archivo creado con éxito');
	})
}

//Función para mostrar listado
const mostrar = () => {
	
	//Cargo el listado
	listar();
	console.log('Notas de los estudiantes')

	//Recorro estudiantes y los muestro
	listaEstudiantes.forEach(estudiante => {
		console.log(estudiante.nombre);
		console.log('Notas');
		console.log('Matemáticas: ' + estudiante.matematicas);
		console.log('Inglés: ' + estudiante.ingles);
		console.log('Programación: ' + estudiante.programacion + '\n');
	});
}

//Función para mostrar un estudiante
const mostrarest = (nom) => {
	
	//Cargo el listado
	listar();

	//Busco un estudiante
	let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
	
	//Si no lo encuentro, muestro error
	if(!est)
	{
		console.log("No existe el estudiante con ese nombre");
	}
	else
	{
		console.log(est.nombre);
		console.log('Notas');
		console.log('Matemáticas: ' + est.matematicas);
		console.log('Inglés: ' + est.ingles);
		console.log('Programación: ' + est.programacion + '\n');
	}
	
}


//Función para mostrar estudiantes que ganaron matemáticas
const mostrarmat = () => {
	
	//Cargo el listado
	listar();

	//Busco un estudiante
	let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
	
	//Muestro error si ganan y si pierden
	if(ganan.length == 0)
	{
		console.log("Ningún estudiante va ganando matemáticas");
	}
	else
	{
		//Recorro estudiantes y los muestro
		ganan.forEach(estudiante => {
			console.log(estudiante.nombre);
			console.log('Notas');
			console.log('Matemáticas: ' + estudiante.matematicas);
		});
	}
	
}

module.exports = {
	crear,
	mostrar,
	mostrarest,
	mostrarmat
}