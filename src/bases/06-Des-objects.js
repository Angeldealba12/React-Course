// Desestruturacion 
// Asingnacion desustrurada 

const persona = {
    nombre: 'Tony', 
    edad: 45, 
    clave: 'Iroman'
};

// const { nombre, edad, clave } = persona; 

// console.log( nombre );
// console.log( edad );
// console.log( clave );
// console.log( persona.edad );
// console.log( persona.clave );

const retornPersona = ({nombre, edad, clave, rango = "Capitan"}) => {
    
    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = retornPersona( persona ); 
console.log(avenger);

const { nombreClave, anios} = retornPersona( persona );

// const { nombreClave, anios} = avenger; 
console.log(nombreClave, anios);

