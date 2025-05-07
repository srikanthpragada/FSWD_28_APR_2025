//superclass 
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        let company = "Google"  // local variable 
    }
    // Method 
    isMajor() {
        return this.age >= 21
    }
}
// Subclass 
class Student extends Person {
    constructor(name, age, course) {
        super(name, age) // call superclass constructor
        this.course = course
    }
    changeCourse(newCourse) {
        this.course = newCourse;
    }
}

let p1 = new Person("Ellison", 60)   // Create an object 
console.log(p1)
let s = new Student("Mark", 20, "MS CS")
s.changeCourse("MS IT")
console.log(s)
console.log(s.isMajor())

