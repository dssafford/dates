const moment = require('moment')
const fs = require('fs');
const { exit } = require('process');

const inputMonth = process.argv[2];
console.log('Month input for template = ' + inputMonth);
//exit()


// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2022/'
const fileName = moment().format('YYYY') + '-' + inputMonth + '.md';
let result = "";

let startTemplate = '# Monthly Review \n\n ### Theme for Monthly \n- [ ] \n\n\n ### Goals for Monthly \n- [ ] \n\n\n ### Overall \n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '

let inputDate = moment().format('YYYY') + '-' + inputMonth;


// let firstMonday = getFirstMondayWithDate('2022-10-01').format('YYYY-MM-DD');
let firstMonday = getFirstMondayWithDate(inputDate).format('YYYY-MM-DD');
console.log("first monday: " + firstMonday);

function getFirstMondayWithDate(date) {
    result = moment(date).startOf('month');
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
fs.writeFileSync(filePath + fileName, startTemplate + '\n -------- \n' + firstWeek + '\n' + secondWeek + '\n' + thirdWeek + '\n' + forthWeek)


// fs.appendFile('dougDate.md', '\n\n eat shit', Err => {
//     if (Err) {
//         Console.Error(Err);
//     }
// })
