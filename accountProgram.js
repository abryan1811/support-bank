import Person from "./transactionInfo.js"

let newPerson = new Person(Date.now, "New", 22, "for reasons");

console.log(newPerson.fullName + " has £" + newPerson.balance + " in their account.");