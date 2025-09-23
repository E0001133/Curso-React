const engineer = {
    firstName: 'Harold',
    lastName: 'Cruz',
    age: 29,
    address:{
        postalCode: 12345,
        city: 'CDMX',
    }
};

/*Operador Spread */
//const spiderman = {...engineer};
const spiderman = structuredClone(engineer); // Clonacion profunda

/*Modificaciones*/  

spiderman.firstName = 'Guillermo';
spiderman.lastName = 'Rodriguez';
spiderman.age = 30;
spiderman.address.postalCode = 54321;  
spiderman.address.city = 'Monterrey';


console.log(engineer, spiderman);