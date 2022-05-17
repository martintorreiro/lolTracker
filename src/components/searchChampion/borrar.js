//[1,3,2,4,5,9,8]
//[2,4,6,1]
/* const arr = [0, 3, 2, 4, 46, 60, 8];

const minMax = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
  return [arr[arr.length - 1], arr[0]];
};

const prueba = minMax(arr);

console.log(prueba); */

// tipos basicos de dato javascript-------------------------------------------------------

let numero1 = 2;
let numero2 = numero1;
numero1 = 6;
console.log(numero2);

const saludo = `hola, yo soy el numero ${numero1}`;

let boolean = true;

const arr = [[1, 2, 3], 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

arr.push(2, 3, 4);
//console.log(arr2);
//console.log(arr);

const objeto = {
  nombre: "martin",
  apellido: "torreiro",
};

console.log(objeto.nombre, objeto.apellido);
