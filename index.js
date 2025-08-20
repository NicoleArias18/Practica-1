import { stdin, stdout } from 'process';
import readline from 'readline'
const rd = readline.createInterface({
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

rd.question("Ingrese una frase o una palabra", (frase)=>{
    let palabraI = frase.split('').reverse().join("")
    console.log(palabraI + " " + frase)
    let respuesta;
//     if(frase == palabraI){

//         respuesta = "es palindromo"

//     }else{
//         respuesta = "no es palindromo"
//     }
//    console.log(respuesta)
respuesta = frase == palabraI? "es palindromo" : "no es palindromo"
console.log(frase + " :" +respuesta)
   rd.close()


})

