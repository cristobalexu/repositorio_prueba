var numero= 34;
var num_par = 4;
var nombre = "Cristobal"
var apellido = "Mieles"

console.log(`${nombre.toUpperCase()} ${apellido.toUpperCase()}`)

var primeraLetra = nombre.charAt(0)
var subcadena = nombre.substr(0,6)

console.log(primeraLetra)
console.log(subcadena)

var estudiantes = ["Alva", "Obeso", "Cardenas", "Taday", "Silva"]

//funcion declarativa
function imprimirEstudiantes(persona) {
	console.log(`Hola, ${persona}.`)
}
// esto es una funcion expresiva
var saludar_estudiantes = function saludar_estudiantes(persona) {
		console.log(`Hola, ${persona}.`)

}
 for (persona of estudiantes){
	 imprimirEstudiantes(persona)
 }

 
