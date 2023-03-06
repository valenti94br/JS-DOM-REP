// TEST 1

let ordenador = {
  marca: "Asus",
  tipo: "portátil",
  perifericos: ["touchpad"],
  almacenamiento: {
    discos: ["SSD"]
  },
  procesador: {
    velocidad: "2.5 GHz"
  }
}

if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2

if (ordenador.marca === "Asus") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3

if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4
if (ordenador.perifericos.includes("touchpad")) {
  console.log("apruebas");
} else {

  console.log("suspendes");
}

// TEST 5
if (ordenador.almacenamiento.discos[0] === "SSD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (ordenador.procesador.velocidad === "2.5 GHz") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Ejercicios Bucles

// Imprimir los números del 21 al 34 en la consola.

for (let i = 21; i <= 34; i++) {
  console.log(i);
}

//   Sumar los números del 1 al 10 y mostrar el resultado en la consola.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log(suma)

// Dado un array de números, imprimir en la consola la suma de todos los números.

const arrayNumeros = [8, 14, 196, 5];
let arraySuma = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
  arraySuma += arrayNumeros[i];
}
console.log(arraySuma)

// Dado un número, encontrar su factorial.

function factorial(numero) {
  let resultado = 10;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5));

//   Dado un array de números, imprimir en la consola solo los números impares.

const impares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosIpmares = obtenerPares(impares);

function obtenerPares(array) {
  let conteo = 0;
  const numerosImpares = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) !== 0) {
      conteo = conteo + 1;
      numerosImpares.push(array[i]);
    }
  }
  return numerosImpares;
}

console.log(numerosIpmares);

// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años

let personas = [
  { nombre: 'Juan', edad: 22 },
  { nombre: 'María', edad: 17 },
  { nombre: 'Pedro', edad: 25 },
  { nombre: 'Laura', edad: 16 }
];

for (let i = 0; i < personas.length; i++) {

  if (personas[i].edad > 18) {
    console.log(personas[i].nombre);
  }
}

// Dado un número, imprimir en la consola si es primo o no.

function esPrimo(numero) {

  if (numero === 2 || numero === 3) {
    return true;
  }

  if (numero <= 1 || numero % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {

    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}


const numero = 7;
if (esPrimo(numero)) {
  console.log(numero + ' es primo');
} else {
  console.log(numero + ' no es primo');
}

//   Utiliza la siguiente array para resolver los próximos ejercicios:

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

//   Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.

const felinosMayoresDe4 = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "Felino" && animales[i].edad > 4) {
    felinosMayoresDe4.push(animales[i]);
  }
}

console.log(felinosMayoresDe4);

// Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.

const herbívorosEdadPar = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "Herbívoro" && animales[i].edad % 2 === 0) {
    herbívorosEdadPar.push(animales[i]);
  }
}

console.log(herbívorosEdadPar);

// Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.

const omnivorosOavesMenoresDe3 = [];

for (let i = 0; i < animales.length; i++) {
  if ((animales[i].especie === "Omnívoro" || animales[i].especie === "Ave") && animales[i].edad < 3) {
    omnivorosOavesMenoresDe3.push(animales[i]);
  }
}

console.log(omnivorosOavesMenoresDe3);

// Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.

const animalesEspecieH = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie.charAt(0) === "H") {
    animalesEspecieH.push(animales[i]);
  }
}

console.log(animalesEspecieH);

// Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.

const animalesNombreLargoEspecieFyH = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].nombre.length > 4 && (animales[i].especie === "Felino" || animales[i].especie === "Herbívoro")) {
    animalesNombreLargoEspecieFyH.push(animales[i]);
  }
}

console.log(animalesNombreLargoEspecieFyH);

// Ejercicios Funciones

// Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.

function eliminarDuplicados(array) {
  const arrayUnico = [];

  for (const elemento of array) {
    if (!arrayUnico.includes(elemento)) {
      arrayUnico.push(elemento);
    }
  }

  return arrayUnico;
}

console.log(eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]));
console.log(eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]));

// Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.

function sumarElementos(array) {
  let suma = 0;

  for (const elemento of array) {
    suma += elemento;
  }

  return suma;
}

console.log(sumarElementos([1, 2, 3, 4, 5]));
console.log(sumarElementos([-5, 10, -15, 20]));

// Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.

function contarCaracteres(array) {
  let totalCaracteres = 0;

  for (const cadena of array) {
    totalCaracteres += cadena.length;
  }

  return totalCaracteres;
}

console.log(contarCaracteres(["Hola", "Mundo"]));
console.log(contarCaracteres(["JavaScript", "es", "genial"]));

// Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.

function numeroMasGrande(array) {
  let maximo = -Infinity;

  for (const numero of array) {
    if (numero > maximo) {
      maximo = numero;
    }
  }

  return maximo;
}

console.log(numeroMasGrande([1, 2, 3, 4, 5]));
console.log(numeroMasGrande([-5, 10, -15, 20]));

// Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.

function cadenaMasLarga(array) {
  let cadenaMasLarga = "";

  for (const cadena of array) {
    if (cadena.length > cadenaMasLarga.length) {
      cadenaMasLarga = cadena;
    }
  }

  return cadenaMasLarga;
}

console.log(cadenaMasLarga(["Hola", "Mundo"]));
console.log(cadenaMasLarga(["JavaScript", "es", "genial"]));

