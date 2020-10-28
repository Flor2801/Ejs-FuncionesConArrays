// EJERCITACION OBLIGATORIA 

// contiene(numero, numeros)
// Crear una funci´ón contiene que 
// tome como argumentos un número numero y un array de números numeros 
// y devuelva true o false dependiendo de si dicho numero se encuentra en el 
// array de numeros. Ejemplo:
const numeros = [1,2,3,54,6]

const contieneNumero = (numero, array) => {
    for (let i = 0; i < array.length; i++) {
        if (numero === array[i]) {
            true
        }
    }
}

console.log(contieneNumero(54,numeros))


// Crear una función invertirCaso que tome como argumento un string
//  y devuelva un string donde cada letra tiene el caso invertido, es decir, 
// cada letra está mayúscula si estaba en minúscula, y viceversa.
let nombre1 = 'Ada Lovelace'
let nombre2 = 'feliz cumple' 
let nombre3 = 'jAvAsCrIpT'


const invertirCaso = (string) => {
for (let i = 0; i < string.length; i++) {
    if(string[i] !== string[i].toLowerCase) {
       string[i].toLowerCase()
    }
    if(string[i] !== string[i].toUpperCase){
    string[i].toUpperCase()
    }
}
}

console.log(invertirCaso("Ada LOVElaCe"))
console.log(invertirCaso(nombre2))
console.log(invertirCaso(nombre3))



// Crear una función gano que tome como argumento un array tragamonedas con 5
// símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 
// símbolos, s´ólo debe comparar los 5 primeros. 
const gano1 = ['⭐️', '⭐️', '⭐️', '💫', '✨']
const gano2 = ['💫', '💫', '💫', '💫', '💫']
const gano3 = ['💫', '💫', '💫', '💫', '💫', '⭐️']


const compararEmojis = (array) => {
    for (let i = 0; i < 6; i++) {
        if(array[i] === array[1] && array[i] === array[2] && array[i] === array[3] && array[i] === array[4] && array[i] === array[5]) {
            return 'Ganaste!!'
        }
    }
}

console.log(compararEmojis(gano1))




// Crear una función estanJuntos que tome como argumento un array de 
// strings personajes, y devuelva true si Sam se encuentra al lado de Frodo,
//  ya sea antes o después, o false sino. 
const array1 = ['Sam', 'Legolas', 'Aragorn', 'Frodo']
const array2 = ['Sam', 'Frodo', 'Aragorn', 'Legolas']

const personajesJuntos = (array) => {
for (let i = 0; i < array.length; i++) {
    if((array.indexOf('Sam')-1) === array.indexOf('Frodo') || (array.indexOf('Sam')+1) === array.indexOf('Frodo'))
     {
    return true
}
else {
    return false
}
}
}

console.log(personajesJuntos(array1))
console.log(personajesJuntos(array2))