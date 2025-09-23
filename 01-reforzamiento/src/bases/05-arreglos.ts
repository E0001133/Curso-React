const myArray:number[] = [1, 2, 3, 4, 5, 6];

const myArray2:number[] = [1, 2, 3, 4, 5, 6]

myArray.push(12);
myArray2.push(12);

console.log(myArray);
console.log(myArray2);

for (const myNumber of myArray) {
    console.log(myNumber + 10);
}

