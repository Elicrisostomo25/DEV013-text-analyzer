
import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`
//Boton limpiar
const caracteres = document.querySelector("li[data-testid= 'character-count']");
const caracteresSinEspacios = document.querySelector("li[data-testid= 'character-no-spaces-count']");
const palabras= document.querySelector("li[data-testid= 'word-count']");
const numeros= document.querySelector("li[data-testid= 'number-count']");
const sumaNumeros= document.querySelector("li[data-testid= 'number-sum']");
const promedioLongitud= document.querySelector("li[data-testid= 'word-length-average']");  
 
const textarea = document.querySelector("textarea");
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click",function limpiarBoton (){
    //limpiar contenido del textarea
    textarea.value = "";
    //limpiar los valores, comenzar 0
    caracteres.innerHTML="Caracteres 0"
    caracteresSinEspacios.innerHTML="caracteresSinEspacios 0"
    palabras.innerHTML="palabras 0"
    numeros.innerHTML="numeros 0"
    sumaNumeros.innerHTML="sumaNumero 0"
    promedioLongitud.innerHTML="promedioLongitud 0"
});

//Recuento de caracteres
textarea.addEventListener("input",()=> {
const charCount = analyzer.getCharacterCount(textarea.value);
caracteres.innerHTML = charCount;
//console.log(charCount);
});

//Recuento de palabras
textarea.addEventListener("input",()=> {
const wordCount = analyzer.getWordCount(textarea.value); 
palabras.innerHTML = wordCount
//contador de palabras, falta diferenciar los números de las palabras
});

//Recuento de caracteres sin espacio ni signos de puntuación



//Recuento de números


//Suma total de números
//Calcular la longitud media de las palabras