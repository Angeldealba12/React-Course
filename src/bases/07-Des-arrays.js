const personajes = ['Goku', 'Vegeta', 'Trunks']

console.log( personajes );

const [ p1, p2, p3] = personajes;

console.log( p1, p2, p3 );

const retornArreglo = () => {
    return ['AIB', 123]
}

const [letras, numeros] = retornArreglo(); 
console.log(letras, numeros)

const usestate = ( valor ) => {

    return [valor, () => { console.log('Hola Mundo') } ];

}

const [nombre, setNombre] = usestate( 'Goku' );

console.log(nombre)
setNombre();

