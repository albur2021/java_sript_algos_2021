// const printMyName = (name, age)=>{
//     console.log(name,age);
// };
// printMyName('Max',29);

// const multiply = (number) =>{
//     return number * 2;
// };
// console.log(multiply(2));

// const divide =(number)=> number / 2;
// console.log(divide(2));

/////////////// Spread and Rest ///////////
// const numbers = [1,2,3,4,5];
// const newNumbers = [...numbers,5,6,7,8,9,10];
// console.log(newNumbers);

// const person = {
//     name:'Max'
// };
// const newPerson ={
//     ...person,
//     age:29
// };
// console.log(newPerson);//{ name: 'Max', age: 29 }

//used to merge a list of function arguments into an array;
// const filter = (...args) =>{
//     return args.filter(el => el ===1);
// }
// console.log(filter(1,3,4));//[1];


//// Destructiring - easily extract array elements or object properties and store them in variables////
// const numbers = [1,2,3];
// [num1, ,num3] = numbers;
// console.log(num1,num3);//1 3 

// Primitive types//
// const person = {
//     name:'Max'
// };

// const secondPerson = person;//it just copy a pointer from 'person'
// const thirdPerson = {
//     ...person // here it copies everthing:properties and methods
// };
// person.name = 'Manu';
// console.log(secondPerson.name);//Manu, 
// //vs Spreding 
// console.log(thirdPerson.name);//Max

const numbers = [1,2,3,4,5];
const doubleNumArray = numbers.map((num)=>{
    return num * 2;
});
console.log(numbers);
console.log(doubleNumArray);
