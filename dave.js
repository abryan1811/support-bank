
import { readFileSync } from 'fs';
<<<<<<< HEAD
import csvParseSync from 'csv-parse/lib/sync';
import csv from "./node_modules/csv-parser"
=======
import {parse} from 'csv-parse/sync';
>>>>>>> 242c04fcc329bd224635e42084be1601a7916656
import moment from 'moment';
import Transaction from './transaction';

function parseRecordToTransaction(record) {
    return new Transaction(
        moment(record.Date, 'DD/MM/YYYY'),
        record.From,
        record.To,
        record.Narrative,
        +record.Amount
    );
}

filepath='files/Transactions2014.csv'

export default function getTransactions(filePath, encoding) {
    const data = readFileSync(filePath, {encoding});
<<<<<<< HEAD
    return csv(data, {columns: true}).map(parseRecordToTransaction);
=======
    return parse(data, {columns: true}).map(parseRecordToTransaction);
>>>>>>> 242c04fcc329bd224635e42084be1601a7916656
}

