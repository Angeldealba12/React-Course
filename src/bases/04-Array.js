// Array in JS

// const arr = new Array( 100 );

// for ( let i = 1; i < 99; i++){
//     arr.push(i);
// }

const arr = [1, 2, 3, 4, 5];

// no es recomendable usar el push para insertat en un array
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

// adding elemnts with spread operator
let arr2 = [ ...arr, 6]

// using an array methond array.property.map

 const arr3 = arr2.map( (elem) => {
     return elem * 2;
 });

console.log( arr )
console.log( arr2 )
console.log( arr3 )

