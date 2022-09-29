//let readlineSync = require('readline-sync');
import Person from "./transactionInfo.js"
import fs from "fs"
import csv from "csv-parser"

const results = [];

const file = 'files/Transactions2014.csv';

fs.createReadStream(file)
    .on('error', () => {
        // handle error
    })

    .pipe(csv())
    .on('data', (row) => {
        // use row data
        console.log(row)
    })

    .on('end', (row) => {
        // handle end of CSV
        for (const row of file) {
            results.push(row);
        }


    })



console.log(results);