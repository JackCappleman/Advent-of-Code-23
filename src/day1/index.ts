import { input } from "./data";



const array = input.split("\n")

const filter = []

for(const value of array){
   const numbers = value.match(/\d/g) ?? []
   if (numbers.length >= 1) filter.push(numbers);
}

let result = 0
for (const value of filter){
const number = value[0] + value[value.length-1]
console.log(number)
result += parseInt(number)
}

console.log(result);

