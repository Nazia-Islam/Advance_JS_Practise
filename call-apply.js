const normalPerson = {
    firstName: "Nazia",
    lastName: "Islam",
    getFullName: function(){ //annonymous function
        console.log(this.firstName + " " +this.lastName);
    },
    salary: 50000,
    chargedBill(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// normalPerson.chargedBill(500);
//console.log(normalPerson.salary);

const heroPerson = {
    firstName: "Amatullah Ann Noor",
    lastName: "Maimoona",
    salary: 100000
}

const BojjatPerson = {
    firstName: "Mostafiz",
    lastName: "Sohan",
    salary: 200000
}

const heroChargedBill = normalPerson.chargedBill.bind(heroPerson);
const bojjatChargedBill = normalPerson.chargedBill.bind(BojjatPerson);
heroChargedBill(10000);
heroChargedBill(10000);
console.log("deducted salary of hero Amatullah:",heroPerson.salary);
bojjatChargedBill(10005);
console.log("deducted salary of bojjat Sohan:",BojjatPerson.salary);
console.log(normalPerson.salary);

//bind() jvabe kaj kore: kodal friend er bari theke ene nijer barite bagan korar moto.ete 
//friend er barite kono effect korbe na.
//borrow mwthod from another object

normalPerson.chargedBill.call(BojjatPerson,12000);
console.log(BojjatPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargedBill.apply(heroPerson, [3000,300,30]);
console.log(heroPerson.salary);