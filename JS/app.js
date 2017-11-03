var numTarjeta = prompt("ingrese su numero de tarjeta");

function isValidCard(num){

  var numberToString = numTarjeta.toString();// lo convierte a string
  var arrayInvert = [];//va a almacenar los elentos invertidos pero en string
  var sumValues = 0 //va a sumar todo los numeros finales


  for(var i = 0; i<numberToString.length; i++){ //recorre cada elemento dado por el usuario
    arrayInvert.unshift(parseInt(numberToString.charAt(i))); //los almacena en el array
  }
  for(var j = 1; j<arrayInvert.length; j = j+2){
    if(arrayInvert[j]*2>=10){
      arrayInvert.splice(j,1,(arrayInvert[j]*2%10)+parseInt(arrayInvert[j]*2/10));
    } else {
      arrayInvert.splice(j,1,arrayInvert[j]*2);
    }
  }
  for(var k = 0; k<arrayInvert.length; k++){
    sumValues = sumValues + arrayInvert[k];
  }
  return sumValues%10===0 ? true : false;
}

console.log(isValidCard(numTarjeta));
