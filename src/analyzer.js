const analyzer = {
  getWordCount: (text) => {
    const wordCount = text.trim().split(/\s+/g);
    const contarPalabras = wordCount.filter(function (elemento){
      return isNaN(elemento); // Devuelve true si el elemento no es un número
    });      
    console.log(contarPalabras); 
    //let soloPalabras = wordCount.replace((?<=^|,)\d+\.\d{2}(?=,|$), "");//aplicar el metodo replace para elimiar los numeros. o metodo filter para que no devuelva numeros y letras
    return contarPalabras.length;
  },

  getCharacterCount: (text) => {
    const characterCount = text.split("").length;
    return characterCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const characterCountExcludingSpaces = text.replace(/\W/g, "");
    const caracteresEspeciales = characterCountExcludingSpaces.length;
    //console.log(caracteresEspeciales);
    return caracteresEspeciales;
    //const caracterEspeciales = characterCountExcludingSpaces.replace(text(/[^\\w]/gi, ''));
    //luego hacer un array nuevo sin espacios y caracteres
    //contar el largo de los abjetos con .length
    
  },

  getAverageWordLength: (text) => {
    //dividir la cadena en un array y eliminar los espacios y caracteres especiales
    const averageWordLength = text.trim().split(/\s+/g); 
    const palabrasFiltradas = averageWordLength.filter(function (elemento){
      return isNaN(elemento); // Devuelve true si el elemento no es un número
    });
    const sumaPalabras = palabrasFiltradas.length;  //guardar la cantidad de palabras
    //console.log("Cantidad de palabras " + sumaPalabras);
    let contarCaracteres = 0;  //guardar la suma de caracteres encontrados

    for (let i = 0; i< palabrasFiltradas.length; i++) { //iterar el array para saber cuantos caracteres hay
      contarCaracteres = contarCaracteres + palabrasFiltradas[i].length;
      //console.log("Caracteres "+ contarCaracteres);
    }

    const mediaPalabras = contarCaracteres/ sumaPalabras; //dividir la cantidad de caracteres y la cantidad de palabras
    //console.log("media de palabras es "+ mediaPalabras)
    return mediaPalabras;
  },
  
  //return resultado; //obtener el resultado
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  getNumberCount: (text) => {
    const numberCount = text.split(" "); 
    let numCount = 0 //contador
    for (let i = 0; i <numberCount.length; i++) { 
      if (numberCount[i] !== '') { //si el no es numero
        const number = Number(numberCount[i]) 
        if (!isNaN(number)){ //si es un numero
          numCount++  //se incrementa el contador
        }
      }
    }
    return numCount;
    //const numContador = numberCount.filter(function (numero) {
    // if(!isNaN === number){
    //  return true

    // console.log(arrFiltrado)
    // if (!isNaN(parseInt(elemento))) {
    //return elemento;

    //let arrFiltrado = arrNumero.filter(function (value) {
    //return value !== undefined; 
  
  },

  getNumberSum: (text) => {
    const arraySuma = text.trim().split(" "); //dividir la cadena filtrada en un array
    const soloNumeros = arraySuma.filter(function (elemento){ 
      return !isNaN(elemento)  //filtrar solo los numeros
    });  
    console.log(soloNumeros);
    let contadorNumeros = 0; //acumulador
    for (let i= 0; i < soloNumeros.length; i++){ //iterar el arreglo para pasar por cada elemento 
      contadorNumeros = contadorNumeros + parseFloat(soloNumeros[i]); //sumar al acumulador el numero y sumarlo a la var
    } 
    console.log(contadorNumeros);
    return contadorNumeros; //retornar el valor de la suma
    /*let acumuladorNumeros = 0; //guardar los numeros en un acumulador
     for (let i= 0; i< arraySuma.length; i++){ //iterar el array 
      if (typeof parseInt(arraySuma[i]) !== isNaN(arraySuma[i])){//si es numero
      console.log(arraySuma[i] + " es un numero? "+ !isNaN(arraySuma[i]));
        acumuladorNumeros++ //si es un numero se incrementa el contador y se guarda
      } if (typeof arraySuma[i] !== "string"){ //si no es número 
        acumuladorNumeros += arraySuma[i] //sumar el contador con el numero siguiente del array
        }
    }
    console.log (acumuladorNumeros);
    return acumuladorNumeros;*/
  }
  //retornar el resultado*/

   
  /*for (let i = 0; i <numberSum.length; i++) { 
      console.log(typeof parseInt(numberSum[i])) //tipo de dato que obtengo del array
      if (typeof parseInt(numberSum[i]) === "number"){ //si el tipo de dato en el array es un numero
         numSuma+= parseInt(numberSum[i])//sumar lo que hay en el acumulador y sumar el numero encontrado en el array

      }
    }
      console.log("sumaDeNumeros",numSuma)
      return numSuma;
    }*/

};
export default analyzer