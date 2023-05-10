import ArrayMethod from "../types/ArrayMethods";

export const arrayMethodsStrings: ArrayMethod[] = [
  {
    id: 1,
    language: "javascript",
    name: "includes",
    description:
      "El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.",
    example: `
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes("brow"));
Expected output: true
    `,
  },
  {
    id: 2,
    language: "javascript",
    name: "indexOf",
    description:
      "El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.",
    example: `
"Blue Whale".indexOf("Blue")    // returns 0
"Blue Whale".indexOf("Blute")   // returns -1
"Blue Whale".indexOf("Whale",0) // returns 5    
    `,
  },
  {
    id: 3,
    language: "javascript",
    name: "length",
    description:
      "La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.",
    example: `
let x = 'Mozilla';

console.log('Mozilla is ' + x.length + ' code units long');
Expected output: "Mozilla is 7 code units long" 
    `,
  },
  {
    id: 4,
    language: "javascript",
    name: "replace",
    description:
      "El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.",
    example: `
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"    
    `,
  },
  /*  {
    id: 5,
    language: "javascript",
    name: "indexOf",
    description:
      "El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.",
    example: `
    
    `,
  }, */
];
