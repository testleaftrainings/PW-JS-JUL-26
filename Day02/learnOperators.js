// basic arithematic operation --> + - * / %
let c=4/3  // 1.3333333 -- quo
console.log(c.toFixed(1)) // used for decimal formatting.
console.log(Math.floor(c)); // removes decimal part, returns nearest smaller integer
console.log(4%3) // 0  -- rem
// relationship operation -->  < , >, <= ,>=, == ,!=
// relationship operation will provide the expression as either true or false 
console.log(3==4)
// incremental and decremental operator --> ++ --
let a=3
// pre incremental 
console.log(++a) // 1+3 
// post incremental
console.log(a++) // fetch the value of a first , 
console.log(a) // then it will add 1 to the varaible a
let b =-15
// pre decremental 
console.log(--b) // 14
// post decremental
console.log(b--) // 14
console.log(b)//13