const moment = require('moment')
const fs = require('fs');
const { exit } = require('process');

// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2023/'
const fileName = moment().format('YYYY-MM-DD') + 'x.md';
let result = "";


fs.appendFile('dougDate.md', '\n\n eat shit', Err => {
    if (Err) {
        Console.Error(Err);
    }
})


// let startTemplate = '### Monthly Review: \n\n\n\n\n\n ### Goals for Month \n\n\n\n ### Overall \n\n\n\n ### Home \n -[ ] \n\n\n\n ### Work \n -[ ]'

// moment().format('MMMM Do YYYY, h:mm:ss a'); // May 05th 2018, 7:20:58 pm
// moment().format('dddd');                    // Thursday
// moment().format("MMM Do YY");               // May 24th 18
// moment().format('YYYY [escaped] YYYY');     // 2018 escaped 2018
// moment().format();

// // var check = moment('2014-07-28', 'YYYY/MM/DD');
// // var check = moment();
// // var month = check.format('M');
// // var day = check.format('D');
// // var year = check.format('YYYY');
// // console.log(check);
// // console.log(month, day, year);

// // exit()


// // dv.span("<br>first.day: " + first.format('YYYY-MM-DD'));
// //console.log("hey = " + moment().startOf('month').add(3,'month').format('YYYY-MM-DD'));

// let firstMonday = getFirstMondayWithDate(moment()).format('YYYY-MM-DD');
// console.log("first monday: " + firstMonday);
// // exit()
// //let firstWeek = moment(firstMonday).format("w")



// // console.log('First week number for file date = [[2023-' + firstWeek + ']]')

// // console.log("First Monday: " + firstMonday);
// // dv.span("<br>Answer from getFirstMondayWithDate = " + firstMonday);

// function getFirstMondayWithDate(date) {
//     result = moment(date).startOf('month');
//     while (result.day() !== 1) {
//         result.add(1, 'day');
//     }
//     return result;
// }

// let firstWeek = "##### First Week Number: [[2023-W" + moment(firstMonday).format("w") + "]]"
// let secondWeek = "##### Second Week Number: [[2023-W" + moment(firstMonday).add(1, 'week').format("w") + "]]"
// let thirdWeek = "##### Third Week Number: [[2023-W" + moment(firstMonday).add(2, 'week').format("w") + "]]"
// let forthWeek = "##### Forth Week Number: [[2023-W" + moment(firstMonday).add(3, 'week').format("w") + "]]"


// // Write out to markdown file in Vault
// fs.writeFileSync(filePath + fileName, startTemplate + '\n\n\n -------- \n' + firstWeek + '\n' + secondWeek + '\n' + thirdWeek + '\n' + forthWeek)


