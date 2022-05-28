//como declarar um array
let array = ['string', 1,true, ['array1'], ['array2']]

/* encontrar indice no array
console.log(array[3]);
*/

/* forEach
array.forEach(function(item, index){console.log(item, index)});
*/

/* push
array.push('novo item');
console.log(array);
*/

/* pop
array.pop();
console.log(array);
*/

/* shift
array.shift();
console.log(array);
*/

/* unshift
array.unshift('teste');
console.log(array);
*/

/* indexOf
console.log(array.indexOf(true));
*/

/* splice
array.splice(0,3);
console.log(array) ;
*/

/*
let novoArray = array.slice(0,3);
console.log(novoArray);
*/

let object = {texto: 'string', number: 1, boolean: true, array: ['array'], objectInterno:{objectInterno: 'objeto interno'} };
console.log(object.number)

texto = object.texto
console.log(texto)

var {texto, number, boolean} = object
console.log(texto, number, boolean)
