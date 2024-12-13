/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.*/

// para solicitar números a los usuarios se debe usar el método promt() para la solicitud de los datos y con mi método parseInt() me aseguro de convertir el string ingresado a un número entero 
//guardo todos estos datos ingresados por el usuario en mi constante "numeros"
const numeros = [
    parseInt(prompt("Primero ingresa tu primer número entero:")),
    parseInt(prompt("Ahora ingresa tu segundo número entero:")),
    parseInt(prompt("Por último, ingresa tu tercer número entero:")),
];

// uso el método sort() para  ordenar los números ingresados,  pero antes hago una copia del arreglo original "numeros" usando el spread operator "..." para evitar modificarlo directamente, es decir, que  los datos originales se van a mantener intactos si los necesito más adelante
// El método sort() utiliza una función de comparación para ordenar los elementos 
// si el resultado de a - b es negativo, "a" se coloca antes que "b" 
// Si el resultado es positivo, "b" se coloca antes que "a"
// si el resultado es 0, el orden de "a" y "b" no cambia
// en mi constante "ordenados" guarda es donde guardo el resultado del arreglo ordenado generado por sort() basado en la función de comparación.
const ordenados = [...numeros].sort((a, b) => a - b);
const [menor, centro, mayor] = ordenados; // desestructuración 
//Por último, mi método sort() devuelve el arreglo ordenado de menor a mayor, y este resultado se guarda en "ordenados".

// uso mi método console.log() para mostrar los resultados en consola
// se usan las variables mayor, centro y menor (que ya desestrucutré  anteriormente(22)) indico los valores correspondientes para poder para representar el número más bajo, el número intermedio y el número más alto del arreglo
console.log(`El número mayor es: ${mayor}`);
console.log(`El número del centro es: ${centro}`);
console.log(`El número menor es: ${menor}`);

// Creo un arreglo vacío llamado "iguales" para almacenar los números repetidos si se llegaran a encontar
// uso condicionales if para comparar en pares (con mi operador === de igualdad estricta) los valores en el arreglo "ordenados", en donde 0 es el numero menor, 1 el den centro y 2 el mayor
// si los números son iguales, se agrega el número al arreglo "iguales" usando el método push().
const iguales = [];
if (ordenados[0] === ordenados[1]) iguales.push(ordenados[0]);
if (ordenados[1] === ordenados[2]) iguales.push(ordenados[1]);


//primero identifico la longitud de mi arreglo "iguales" con mi propiedad .length y verifico si es mayor que 0, es decir si al menos contiene un número
// Si mi arreglo "iguales" tiene elementos (números repetidos), se eliminan los duplicados usando mi constructor "Set" y es entonces cuando ...new Set(iguales) crea un nuevo arreglo sin los duplicados
// uso un template literal (``) y ${} para combinar texto y el resultado de [...new Set(iguales)].join(", ") en un mismo mensaje
// Si no hay elementos en "iguales", muestra un mensaje indicando que no hay números iguales.
if (iguales.length > 0) {
    console.log(`Números iguales encontrados: ${[...new Set(iguales)].join(", ")}`);
} else {
    console.log("No hay números iguales.");
}


// Por último, uso mi método console.log() para mostrar el resultado del arreglo ordenado en consola.
// uso mi método join(", ") para convertir los elementos del arreglo en una cadena, separados por comas.
// primero muestro el arreglo ordenado de menor a mayor ("ordenados"(21)).
console.log(`De menor a mayor: ${ordenados.join(", ")}`);

// luego, uso el método slice() para hacer una copia del arreglo "ordenados" y aplico reverse() para invertir el orden.
// con esto me aseguro de que la copia invertida no modifique el arreglo original
// finalmente uso join(", ") para mostrar el arreglo invertido como un string
console.log(`De mayor a menor: ${ordenados.slice().reverse().join(", ")}`);

/* 
parseInt() Convierte un string a un número entero
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

Spread (...) Hace una copia de un arreglo u objeto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

sort() ordena los elementos de un arreglo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Desestructuración Extrae valores de un arreglo u objeto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

if ejecuta código si se cumple una condición
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

=== Compara valores y tipos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

push() agrega elementos a un arreglo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Set Almacena valores únicos y elimina duplicados
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

join() convierte un arreglo en una cadena https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

slice() crea una copia de parte de un arreglo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

reverse() invierte el orden de un arreglo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
*/
