//Exercise1//

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const myAlphabetLength = () => console.log(myAlphabet.length);

myAlphabetLength();

//Exercise1.2//

const planets = ['mars','earth','saturn','venus','neptune'];

console.log(planets);
console.log(planets.slice(0,2));

planets.forEach((planet,index) => console.log( `${planet} [${index}]`));

//Exercise1.3//

let myArr = [ 1, 2, 'One', true];

myArr.forEach(item => console.log(item));