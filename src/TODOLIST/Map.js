

// map is like a for loop
// map is the higher order function
// function kulla function iruntha higher
// order function 
// numbers.map oru function adhu kulla oru
// function

const numbers = [-1,-2,0,1,2]
const itemss = numbers.map(n=>({numbers:n})).filter(n=>n>=0)
console.log(itemss);

// output

// index 0 =  number:-1 
// index 0 =  number:-2 
// index 0 =  number:-0
// index 0 =  number:-1 
// index 0 =  number:-2 

//  if condition pathula inga fliter
//  for loop ku bathula map