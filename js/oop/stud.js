class Student {
    constructor(admno, fullname, course = 'python', feepaid = 0) {
        this.admno = admno
        this.fullname = fullname
        this.course = course
        this.feepaid = feepaid
    }

    show() {
        console.log(this.admno);
        console.log(this.fullname);
        console.log(this.course);
        console.log(this.feepaid);
    }

    payment(amount) {
        if (this.feepaid + amount <= this.getTotalFee())
            this.feepaid += amount
        else
            throw new Error('Excess fee being paid!')
    }

    getTotalFee() {
        if (this.course === 'python')
            return 10000
        else
            if (this.course === 'ds')
                return 15000
            else
                return 7500   // aws
    }

    getDue() {
        return this.getTotalFee() - this.feepaid 
    }
}

let s1 = new Student(1, "Jack", "aws", 7500)
s1.payment(5000)
console.log(s1.getDue())

