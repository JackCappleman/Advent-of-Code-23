import { input } from "./data";

const array = input.split("\n")
let result = 0
for(const value of array){
   const numbers = value.match(/\d/g) ?? []
   if (numbers.length >= 1) {
      const number = numbers[0] + numbers[numbers.length - 1]
      result += parseInt(number)
   };
}
console.log(result);
