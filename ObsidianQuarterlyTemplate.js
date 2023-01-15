// This creates a quarterly obsidian file on my macs, filepath based on machine
// node obsidianquarterlytemplate.js 3  is the command line call.  Need the desired quarter added to the call
// note:  call can be used from keyboard maestro macro and called that way...


const moment = require('moment')
const fs = require('fs');
const { exit } = require('process');

const inputQuarter = process.argv[2];
// const inputQuarter = 4;
console.log('Quarter input for template = ' + inputQuarter);

console.log('Moment quarter = ' + moment().quarter(inputQuarter).startOf('quarter').format('MM-DD-YYYY'));
console.log('Moment Month 1 = ' + moment().quarter(inputQuarter).startOf('quarter').format('MM'));
console.log('Moment Month 2 = ' + moment().quarter(inputQuarter).startOf('quarter').add(1, 'month').format('MM'));
console.log('Moment Month 3 = ' + moment().quarter(inputQuarter).startOf('quarter').add(2, 'month').format('MM'));

// exit()


let filePath = '/Users/c023490/Vaults/DougVault/Calendar/CurrentYear/'
const fileName = moment().format('YYYY') + '-Q' + inputQuarter + '.md';
let result = "";

let startTemplate = '# Quarterly Review \n\n ### Theme for Quarter \n- \n\n\n ### Goals for Quarter\n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '


let firstMonth = "##### First Month Number: [[2023-" + moment().quarter(inputQuarter).startOf('quarter').format('MM') + "]]"
let secondMonth = "##### Second Month Number: [[2023-" + moment().quarter(inputQuarter).startOf('quarter').add(1, 'month').format('MM') + "]]"
let thirdMonth = "##### Third Month Number: [[2023-" + moment().quarter(inputQuarter).startOf('quarter').add(1, 'month').format('MM') + "]]"

// Write out to markdown file in Vault
fs.writeFileSync(filePath + fileName, startTemplate + '\n -------- \n' + firstMonth + '\n' + secondMonth + '\n' + thirdMonth)