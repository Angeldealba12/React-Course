// working with fucntions in JS 

const saludar = function s(nombre ){
    return `Hola, ${ nombre }`
}

console.log(saludar('Angel'))

const saludar2 = name => `Hola, ${name}`;

console.log(saludar2('Vegeta'))

// const getUSer = () => ({ 
//     uID: 'ABC123', 
//     userName: 'El_Papi1502'
// })

// console.log( getUSer() )

const getUSer = ( nombre ) => ({
    uID: 'ABC123',
    userName: nombre
})

 const activeUser = getUSer('Vegeta');
 console.log( activeUser );

 