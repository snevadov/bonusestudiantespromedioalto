/*Requiere instalar yargs
Se instala en el repositorio con:
	> npm i yargs
*/

//Ejemplo para repositorio.
//Ejecuta con:
//node index crear -n Maria -m 3 -i 3 -p 5
const {argv} = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];

/* -------------- VERSION 1
//Se quita debido a que un Switch es más eficiente

//Llamo la función dependiendo del valor
if (argv._[0] == 'crear'){
	funciones.crear(argv);
}*/

/* --------------- VERSION 2
*/

switch (comando){

	case 'crear':
		funciones.crear(argv);
		break;

	case 'mostrar':
		funciones.mostrar();
		break;

	case 'mostrarest':
		funciones.mostrarest(argv.nombre);
		break;

	case 'mostrarmat':
		funciones.mostrarmat();
		break;

	default:
		console.log('No ingresó una función existente');
}
