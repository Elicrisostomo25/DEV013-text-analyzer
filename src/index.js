
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

  const characterCount = analyzer.getCharacterCount(textarea.value);
  caracteres.innerHTML="Caracteres " +  characterCount;

  const palabrasCount = analyzer.getWordCount(textarea.value);
  palabras.innerHTML="palabras " + palabrasCount;

  const caractEspeciales = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  caracteresSinEspacios.innerHTML = "caracteres Sin Espacios " + caractEspeciales; 

  const numContar = analyzer.getNumberCount(textarea.value);
  numeros.innerHTML = "numeros "+ numContar; 

  const contadorNumeros = analyzer.getNumberSum(textarea.value);
  sumaNumeros.innerHTML = "suma de numeros " + contadorNumeros;

  const mediaPalabras = analyzer.getAverageWordLength(textarea.value);
  promedioLongitud.innerHTML="promedio Longitud " + mediaPalabras;

});

//Calcular la longitud media de las palabras
