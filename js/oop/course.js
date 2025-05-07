class Course {
    constructor(title, fee, duration = 36) {
        this.title = title 
        this.fee = fee 
        this.duration = duration 
    }
    getNetFee() {
        return  this.fee * 1.12
    }
}

let c1 = new Course('AWS', 5000, 24)
console.log(c1)
console.log(c1.duration)
console.log(c1.getNetFee())