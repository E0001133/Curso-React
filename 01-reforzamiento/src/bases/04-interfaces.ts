interface Person {
    firstName: string;
    lastName: string;
    age: number;

    /**
     * Esto es una propiedad opcional por el sibmolo ?
   
    address?: {
        postalCode: string;
        city: string;
    }
          */

    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}   

const engineer: Person = {
    firstName: 'Harold',
    lastName: 'Cruz',
    age: 29,

    address:{
        postalCode: '12345',
        city: 'CDMX',
    }
};

console.log(engineer);