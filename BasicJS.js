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

// const numbers = [1,2,3,4,5];
// const doubleNumArray = numbers.map((num)=>{
//     return num * 2;
// });
// console.log(numbers);
// console.log(doubleNumArray);


// const returnArray=(array)=>{
//     return array;
// };
// var fruits = ['oranges', 'bananas', 'apples']; // we are defining a variable that we will pass to our function as an argument
// var resultArray = returnArray(fruits); // now, we call the function with 'fruits' as our argument
// console.log('resultArray:', resultArray);

// const returnElement =(array, index)=>{
//     return array[index];
// };
// var scores = [98, 85, 91, 78, 82];
// var position = 3;
// var positionElement = returnElement(scores,position);
// console.log(positionElement);

// const createAndReturnArray = ()=>{
//     let newArray=['some','elements',4,5];
//     return newArray;
// };
// var resultArray1=createAndReturnArray();
// console.log(resultArray1);

// function returnAValue(obj, key) {
//     return obj[key];
//   }
  
//   var computer = {
//     name: "MacBook Pro",
//     version: "10.14.6",
//     processor: "2 GHz Intel Core i7",
//     memory_gb: 8
//   };
//   var nameOfKey = "version";
//   var valueAtKey = returnAValue(computer, nameOfKey);
//   console.log('valueAtKey:', valueAtKey);

//   const getType = (param) =>{
//       return typeof param;
//   };
//   var stringType = getType('serial number');
//   console.log(stringType);

//   const determineIsAnArray = (input) =>{
//       let isAnArray = Array.isArray(input);
//       return isAnArray;
//   };
// var affirmative = determineIsAnArray([1, 2, 3]);
// console.log('affirmative:', affirmative);//true

// const createAndReturnAnObject = () =>{
//     let obje={};
//     return obje;
// }


// var typeOfOperand = typeof {a: 1};
// console.log('some message:', typeOfOperand);//object

// let sense = true;
// let nonsense = !sense;
// console.log(nonsense);//false
// let notNonsense = !nonsense;
// console.log(notNonsense);//true;

// const opposite=(boolean)=>{
//     return !boolean;
// }

const eitherAreTrue=(bool_1, bool_2)=>{
    let result = bool_1 || bool_2;
    return result;
};
var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);
var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);