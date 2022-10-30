// This creates a quarterly obsidian file on my macs, filepath based on machine
// node obsidianquarterlytemplate.js 3  is the command line call.  Need the desired quarter added to the call
// note:  call can be used from keyboard maestro macro and called that way...


const moment = require('moment')
const fs = require('fs');
const { exit } = require('process');

const inputHalf = process.argv[2];

// const inputQuarter = 4;

if (inputHalf == 1) {
    console.log('Year half input for template = ' + inputHalf);

    console.log('Moment year half = ' + moment().month(1).format('MM-DD-YYYY'));
    console.log('Moment Month 1 = ' + moment().month(0).format('MM'));
    console.log('Moment Month 2 = ' + moment().month(1).format('MM'));
    console.log('Moment Month 3 = ' + moment().month(2).format('MM'));
    console.log('Moment Month 4 = ' + moment().month(3).format('MM'));
    console.log('Moment Month 5 = ' + moment().month(4).format('MM'));
    console.log('Moment Month 5 = ' + moment().month(5).format('MM'));
} else {
    console.log('Year half input for template = ' + 23);

    console.log('Moment year half = ' + moment().month(1).format('MM-DD-YYYY'));
    console.log('Moment Month 1 = ' + moment().month(6).format('MM'));
    console.log('Moment Month 2 = ' + moment().month(7).format('MM'));
    console.log('Moment Month 3 = ' + moment().month(8).format('MM'));
    console.log('Moment Month 4 = ' + moment().month(9).format('MM'));
    console.log('Moment Month 5 = ' + moment().month(10).format('MM'));
    console.log('Moment Month 5 = ' + moment().month(11).format('MM'));
}
exit()


let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2022/'
const fileName = moment().format('YYYY') + '-Q' + inputQuarter + '.md';
let result = "";

let startTemplate = '# Quarterly Review \n\n ### Theme for Quarter \n- \n\n\n ### Goals for Quarter \n- [ ] \n\n\n ### Overall \n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '


let firstMonth = "##### First Month Number: [[2022-" + moment().quarter(inputQuarter).startOf('quarter').format('MM') + "]]"
let secondMonth = "##### Second Month Number: [[2022-" + moment().quarter(inputQuarter).startOf('quarter').add(1, 'month').format('MM') + "]]"
let thirdMonth = "##### Third Month Number: [[2022-" + moment().quarter(inputQuarter).startOf('quarter').add(1, 'month').format('MM') + "]]"

// Write out to markdown file in Vault
fs.writeFileSync(filePath + fileName, startTemplate + '\n -------- \n' + firstMonth + '\n' + secondMonth + '\n' + thirdMonth)