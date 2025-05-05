
function print() {
    console.log("Hello!")
}

function wish(name){
    console.log("Hi " + name)
}

function doSomething(func, value) {
    func(value)
}

doSomething(print)
doSomething(wish, "Bill")

// Passing a function expression where function is needed 
doSomething( function() { console.log("Function Expression")})