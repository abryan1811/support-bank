//let readlineSync = require('readline-sync');
import Person from "./transactionInfo.js"
import fs from "fs"
import { readFileSync } from 'fs';
import csv from "csv-parser"
import moment from 'moment';
import {generate, parse, transform, stringify} from 'csv';

/*
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

*/

function parseRecordToTransaction(record) {
    return new Person(
        moment(record.Date, 'DD/MM/YYYY'),
        record.From,
        record.To,
        record.Narrative,
        +record.Amount
    );
}

export default function getTransactions(filePath, encoding) {
    
    const data = readFileSync(filePath, {encoding});
    //return csv(data, {columns: true}).map(parseRecordToTransaction);

    //console.log(data);

    const dataArr = data.split("\n");

    //dataArr.splice(0, 1);
        
    for (let i = 1; i < dataArr.length; i++) {
        console.log(dataArr[i]);
    };

    //const parser = parse();

    //const dataret = csv(data, {columns: true}).map(parseRecordToTransaction);

    return false;
   
}

console.log(getTransactions('./files/Transactions2014.csv', 'utf-8'));

// 