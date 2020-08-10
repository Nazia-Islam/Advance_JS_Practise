const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

//-------------------------------
// const output = [];

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
//console.log(output);
//--------------------------------

// function square(element){
//     return element * element;
// }
// const result = numbers.map(function square(element){
//     return element * element;
// });
// map() has 3 parameters (elements, index, array):
//map()  array er moddhe looping kore protita element dhore kisu ekta kaj kore.
//map() array return kore.
//------------------------------------------

// const result = numbers.map(element => element * element);//(x => x * x)

// console.log(result);

const bigger = numbers.filter(x => x > 5);// filter array return kore. element na thakle empty array return kore.

const isThere = numbers.find(x => x > 5);//filter er motoi but only single element return kore.

console.log(isThere);