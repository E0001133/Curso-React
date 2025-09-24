/*----- Destructuración de objetos -----*/

const personaje = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const { name:ironmanName, age, key } = personaje;

//Esto es codigo de js
/*const name = personaje.name;
const age = personaje.age;
const key = personaje.key; */

console.log({ironmanName, age, key});

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string | undefined;
}

const useContext = ( {key, name, age, rank}: Hero ) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
};

const context = useContext( personaje );
console.log(context);

/*Ejercicio */

const {rank, keyName, user: {name}} = useContext( personaje );
console.log({rank, keyName, name});
