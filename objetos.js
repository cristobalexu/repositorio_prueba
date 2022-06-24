//El uso de inicializadores de objeto

var investigador = {
	nombre :"Cristobal", 
	Apellido: "Mieles",
	email : "cristobal234@gmail.com",
	filicacion: "Universidad Politecnica Salesiana",
	edad: 37,
	ingeniero: true,
	masterado: true,
	doctorado: true
}

const imprimir_Investigador= function (persona) {
	console.log(`${persona.nombre} ${persona.Apellido}, ${persona.email}`)
	console.log(`${persona.filicacion}`)

	if (persona.ingeniero) {
		console.log("Es ingeniero")
	}
	if (persona.masterado) {
		console.log ("Es masterado")
	}
	if (persona.doctorado) {
		console.log("Es doctorado")
	}
}
	imprimir_Investigador(investigador)

var imprimir_Investigador2= function ({nombre, Apellido,email,filicacion}) {
	console.log(`${nombre} ${Apellido}, ${email}`)
	console.log(`${filicacion}`)
}
imprimir_Investigador2(investigador)
var cumpliranios_Ref = function (persona) {
	persona.edad += 1
}
var cumpliranios_Val = function (edad) {
	return edad += 1
}
cumpliranios_Val(investigador)

// declarativa
const Mayor_Edad = 17
function esMayorEdad(persona){
	return persona.edad >= Mayor_Edad 
}
// expresiva
const esMayorEdad2 = function (persona) {
	return persona.edad >= Mayor_Edad
}

//flecha 
const esMayorEdad3 = persona=> persona.edad >= Mayor_Edad

