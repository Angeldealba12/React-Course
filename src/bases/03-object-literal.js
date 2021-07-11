const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55554,
        lat: 14.354,
        lng: 34.9223,
    }
};

console.log( { persona } );
// console.table( persona );

//Making a copy of persona object and storing it in persona2
const persona2 = { ...persona };

persona2.nombre = 'Antonio';

console.log( persona2 );

