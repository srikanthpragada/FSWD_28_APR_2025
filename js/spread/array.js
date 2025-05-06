let a = [10, 20, 30]

let b = a   // assign address 
let c = [1, ...a, 1000]

a[0]  = 100 
console.log(b)

console.log(c)
