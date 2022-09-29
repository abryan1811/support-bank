//let readlineSync = require('readline-sync');
import Person from "./transactionInfo.js"
import fs from "fs"
import csv from "csv-parser" 

const results = [];

fs.createReadStream('files/Transactions2014.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });

console.log(new Person(results.name))