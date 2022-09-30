//let readlineSync = require('readline-sync');
import Transactions from "./transactionInfo.js"
import fs from "fs"
import { readFileSync } from 'fs';
import csv from "csv-parser"
import moment from 'moment';
import {generate, parse, transform, stringify} from 'csv';

function displayWelcome(){
    console.log("Welcome to SupportBank!");
    console.log("-----------------------");
}

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
    return new Transations(
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
       
    const dataItemArr = dataArr[i].split(',');

    let date = dataItemArr[0];
    let from = dataItemArr[1];
    let to = dataItemArr[2];
    let narrative = dataItemArr[3];
    let amount = dataItemArr[4];

    console.log(date + ': ' + from + ' to pay ' + to +  ' a total of ' + '£' + amount + ' - reason: ' + narrative);
    };

      
   
    //const parser = parse();

    //const dataret = csv(data, {columns: true}).map(parseRecordToTransaction);

}

displayWelcome();

(getTransactions('./files/Transactions2014.csv', 'utf-8'));

// 