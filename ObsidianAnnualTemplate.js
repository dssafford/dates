// This creates an annual obsidian file on my macs, filepath based on machine
// node obsidianannualtemplate.js 2022  is the command line call.  Need the desired year added to the call
// note:  call can be used from keyboard maestro macro and called that way...


const moment = require('moment')
const fs = require('fs');

const { exit } = require('process');

const inputQuarter = process.argv[2];
// const inputQuarter = 4;
console.log('Year input for template = ' + inputQuarter);

// console.log('Moment first quarter = ' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(1).format('Q'));
// console.log('Moment first quarter =  ' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(2).format('Q'));
// console.log('Moment first quarter = ' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(3).format('Q'));
// console.log('Moment first quarter =  ' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(4).format('Q'));


// console.log('Moment Month 1 = ' + moment().quarter(inputQuarter).startOf('quarter').format('MM'));
// console.log('Moment Month 2 = ' + moment().quarter(inputQuarter).startOf('quarter').add(1, 'month').format('MM'));
// console.log('Moment Month 3 = ' + moment().quarter(inputQuarter).startOf('quarter').add(2, 'month').format('MM'));


// exit()

let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2022/'
const fileName = inputQuarter + '.md';
let result = "";

let startTemplate = "# Annual Planning and Review for Year: " + inputQuarter + "\n\n ### Theme for Year \n- \n\n\n ### Goals for Year \n- [ ] \n\n\n ### Overall \n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] "

//Quarters
let firstQuarter = '##### First quarter = [[' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(1).format('Q') + "]]";
let secondQuarter = '##### Second quarter =  [[' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(2).format('Q') + "]]";
let thirdQuarter = '##### Third quarter = [[' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(3).format('Q') + "]]";
let forthQuarter = '##### Forth quarter =  [[' + inputQuarter + "-Q" + moment().year(inputQuarter).quarter(4).format('Q') + "]]";

let quartersTemplate = '### Quarters \n' + firstQuarter + '\n' + secondQuarter + '\n' + thirdQuarter + '\n' + forthQuarter + '\n\n -----'

// Months
let firstMonth = "##### First Month: [[" + moment().year(inputQuarter).month(0).format('YYYY-MM') + "]]"
let secondMonth = "##### Second Month: [[" + moment().year(inputQuarter).month(1).format('YYYY-MM') + "]]"
let thirdMonth = "##### Third Month: [[" + moment().year(inputQuarter).month(2).format('YYYY-MM') + "]]"
let forthMonth = "##### Forth Month: [[" + moment().year(inputQuarter).month(3).format('YYYY-MM') + "]]"
let fifthMonth = "##### Fifth Month: [[" + moment().year(inputQuarter).month(4).format('YYYY-MM') + "]]"
let sixthMonth = "##### Sixth Month: [[" + moment().year(inputQuarter).month(4).format('YYYY-MM') + "]]"
let seventhMonth = "##### Seventh Month: [[" + moment().year(inputQuarter).month(6).format('YYYY-MM') + "]]"
let eighthMonth = "##### Eighth Month: [[" + moment().year(inputQuarter).month(7).format('YYYY-MM') + "]]"
let ninthMonth = "##### Ninth Month: [[" + moment().year(inputQuarter).month(8).format('YYYY-MM') + "]]"
let tenthMonth = "##### Tenth Month: [[" + moment().year(inputQuarter).month(9).format('YYYY-MM') + "]]"
let eleventhMonth = "##### Eleventh Month: [[" + moment().year(inputQuarter).month(10).format('YYYY-MM') + "]]"
let twelfthMonth = "##### Twelfth Month: [[" + moment().year(inputQuarter).month(11).format('YYYY-MM') + "]]"


// Write out to markdown file in Vault
fs.writeFileSync(filePath + fileName, startTemplate + '\n -------- \n' + quartersTemplate + "\n### Months" + '\n' + firstMonth + '\n' + secondMonth + '\n' + thirdMonth + '\n' + forthMonth + '\n' + fifthMonth + '\n' + sixthMonth + '\n' + seventhMonth + '\n' + eighthMonth + '\n' + ninthMonth + '\n' + tenthMonth + '\n' + eleventhMonth + '\n' + twelfthMonth)