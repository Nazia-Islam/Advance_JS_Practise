const Students = [
    {id: 132, name: "Farhana Akter"},
    {id: 312, name: "Fariha Afsana"},
    {id: 142, name: "Nazia Islam"}
];

// const output = [];

// for(let i = 0;i<Students.length;i++){
//     const name = Students[i].name;
//     output.push(name);
// }

// console.log(output);

const names = Students.map(s => s.name);
const names = Students.map(s => s.name);
const idBigger = Students.filter( s => s.id > 300);
console.log(idBigger);
console.log(names);