import ArrayMethod from "../types/ArrayMethods";

export const arrayMethods: ArrayMethod[] = [
  {
    id: 1,
    language: "javascript",
    name: "map",
    description:
      "El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.",
    example: `
let numbers = [1, 5, 10, 15];

let doubles = numbers.map((number) => {
    return number * 2;
});

double is now [2, 10, 20, 30]
    `,
  },
  {
    id: 2,
    language: "javascript",
    name: "splice",
    description:
      "El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.",
  },
  {
    id: 3,
    language: "javascript",
    name: "join",
    description:
      "El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.",
  },
  {
    id: 4,
    language: "javascript",
    name: "filter",
    description:
      "El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.",
  },
  {
    id: 5,
    language: "javascript",
    name: "forEach",
    description:
      "El método forEach() ejecuta la función indicada una vez por cada elemento del array.",
  },
  {
    id: 6,
    language: "javascript",
    name: "push",
    description:
      "El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.",
  },
];
