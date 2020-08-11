let bonus = 20;//scope sobkhanei thakbe //global scope
function sum(first, second){//block scope
    let result = first + second + bonus;
    //return result;
    if(result > 10){
        const mood = "happy"; //ai block scope e mood available const or let diye but baire na
        console.log(mood);
    }

}
//console.log(mood);// var mood ="happy"; dile block scope er baireo mood available hoto.
//console.log(result); //etar scope sum function er vitore only
const output = sum(3,7);
console.log(output);