import { stdin, stdout } from 'process';
import readline from 'readline'
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

// rd.question('what is your name', (name)=>{
//     console.log("welcome " + name)
//     rd.close()
// })

// let word = "Hola esto es javaSCript";
// //ToLowerCase
// console.log(word.toLowerCase());
// console.log(word.toUpperCase());
// console.log(word.trim().split(/\s+/));
// console.log("reverse:"+word.split("").reverse().join(''))


// console.log(word.replaceAll(" ", " ").split(','));

// rd.question("Ingrese una frase o una palabra", (frase)=>{
//     let palabraI = frase.split('').reverse().join("")
//     console.log(palabraI + " " + frase)
//     let respuesta;
// //     if(frase == palabraI){

// //         respuesta = "es palindromo"

// //     }else{
// //         respuesta = "no es palindromo"
// //     }
// //    console.log(respuesta)
// respuesta = frase == palabraI? "es palindromo" : "no es palindromo"
// console.log(frase + " :" +respuesta)
//    rd.close()


// })

// //Ejercicio 2 Contador de vocales: función que recibe una cadena y devuelve el número 
// //de vocales (a,e,i,o,u) que contiene.

// rl.question('Escriba una frase ', (frase)=>{
//     let vocales = frase.match(/[aeiou]/gi)
//     let numVocales = vocales ? vocales.length : 0
//     console.log(`El numero de vocales que contiene esta frase es: ${numVocales} `)
//     rl.close()
// })

// (Intermedio, 20–30 min) 
// 3. Anagrama simple: dada una palabraA y palabraB, comprobar si son 
// anagramas (mismas letras, distinto orden). Hint: normalizar y ordenar 
// // caracteres. 
// rl.question('Ingrese la primera palabra ', (palabraA) =>{
//     rl.question('Ingrese la segunda palabra', (palabraB)=>{
// let ordenCaract1 = palabraA.normalize('NFD').toLowerCase().split("").sort().join("")
// let ordenCaract2 = palabraB.normalize('NFD').toLowerCase().split("").sort().join("")

// console.log(`palabra 1: ${ordenCaract1}`)
// console.log(`palabra 2: ${ordenCaract2}`)
// let respuesta;
// if(ordenCaract1 === ordenCaract2){

//     respuesta = "son anagramas"
//     console.log(`${respuesta}`)
// } else {

//     respuesta = "no son anagramas"
//     console.log(`${respuesta}`)

// }

// rl.close()


//     })
    
// })

// //Palabra más frecuente: dada una frase, devolver la palabra que aparece 
// más veces (ignorar mayúsculas y signos). Si hay empate, devolver 
// cualquiera.

rl.question('Escribe una frase: ', (frase) => {
  
    const pal = frase.toLowerCase().replace(/[^\w\s]/g, '');

  
    const palabras = pal.split(' ');


    const conteo = {};
    for (let palabra of palabras) {
    if (palabra) {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
    }
}

    let masFrecu = '';
    let maxim = 0;
    for (let palabra in conteo) {
    if (conteo[palabra] > maxim) {
        maxim = conteo[palabra];
        masFrecu = palabra;
    }
}

    console.log(`La palabra más frecuente es: ${masFrecu}`);
    rl.close();
});
