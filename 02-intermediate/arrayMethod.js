/*const myArray =[0,1,2,3,4,5,6,7]
console.log(myArray)
myArray.push(8);
console.log(myArray)
myArray.push(9);
console.log(myArray)
myArray.pop();
console.log(myArray)
myArray.unshift(0); //add a new elament 1st index
console.log(myArray);
myArray.shift();      //remove a element from 1st element
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(7));
console.log(myArray.indexOf(19));
console.log(myArray);
const demoArray =myArray.join();   //join-it basically works on converting a array string
console.log(demoArray);
console.log(typeof demoArray);
console.log("a","myArray");
const myArray1 =myArray.slice(1,3);
console.log(myArray1);
console.log("B",myArray);
const myArray2 =myArray.splice(1,3)
console.log(myArray2)*/
const cars =["maruti","alto","xuv","waynor"]
const supercars =["bmw","audi","g-wagon","defend"]
//  cars.push(supercars);
// console.log(cars);
// cars.concat(supercars);
// console.log(cars);
// const allcars = cars.concat(supercars);
// console.log(allcars);
const allNewcars =[...cars,...supercars];
console.log(allNewcars);