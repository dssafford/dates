const moment = require('moment')
const fs = require('fs');
const { exit } = require('process');

// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2022/'
const fileName = moment().format('YYYY-MM') + 'x.md';
let result = "";

let startTemplate = '### Monthly Review: \n\n\n\n\n\n ### Goals for Month \n\n\n\n ### Overall Theme \n\n\n\n ### Home \n -[ ] \n\n\n\n ### Work \n -[ ]'
let firstMonday = getFirstMondayWithDate(moment()).format('YYYY-MM-DD');
console.log("first monday: " + firstMonday);

function getFirstMondayWithDate(date) {
    result = moment(date).startOf('month').add(1, 'months');
    while (result.day() !== 1) {
        result.add(1, 'day');
    }
    return result;
}
let firstWeek = "##### First Week Number: [[2022-W" + moment(firstMonday).format("w") + "]]"
let secondWeek = "##### Second Week Number: [[2022-W" + moment(firstMonday).add(1, 'week').format("w") + "]]"
let thirdWeek = "##### Third Week Number: [[2022-W" + moment(firstMonday).add(2, 'week').format("w") + "]]"
let forthWeek = "##### Forth Week Number: [[2022-W" + moment(firstMonday).add(3, 'week').format("w") + "]]"

// Write out to markdown file in Vault
fs.writeFileSync(filePath + fileName, startTemplate + '\n\n\n -------- \n' + firstWeek + '\n' + secondWeek + '\n' + thirdWeek + '\n' + forthWeek)

