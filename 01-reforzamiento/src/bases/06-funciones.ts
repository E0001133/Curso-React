/*Función tradicional*/
function greet(name: string): string {
    return `Hola ${name}`
}

/*Funcion de flecha*/
const greet2 = (name: string): string => {
    return `Hola ${name}`
}

const greet3 = (name: string): string => `Hola ${name}`;

const message = greet('Fernando');
const message2 = greet2('Melissa');
const message3 = greet3('Juan');    

console.log(message);
console.log(message2);
console.log(message3);  


/***Utilizando interfaces ***/
interface User{
    uid: string;
    username: string;
}


function getUser():User {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const user= getUser();
console.log(user);

/*--- Fin de Función con Interfaces ---*/


/*Los parentesis son un return implicito*/ 
const getUser2 = () =>({
        uid: 'ABC-123',
        username: 'El_Papi15023'

})

const user2 = getUser2();
console.log(user2);



/*--- Callbacks ---*/
const myNumber: number[] = [1,2,3,4,5];

myNumber.forEach((number) => {
    console.log(number);
});

