// This creates a weekly obsidian file on my macs, filepath based on machine
// node obsidianweeklytemplate.js 41  is the command line call.  Need the desired month added to the call
// note:  call can be used from keyboard maestro macro and called that way...

const moment = require('moment')
const fs = require('fs');

const { exit } = require('process');

const inputWeek = process.argv[2];

console.log('Week number input for template = ' + inputWeek);

console.log('first day of week for input week = ' + moment().week(inputWeek).startOf().subtract(1, 'day').format('YYYY-MM-DD'));
//exit()



// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2023/'
const fileName = moment().format('YYYY') + '-W' + inputWeek + '.md';
let result = "";

let startTemplate = '# Weekly Review \n\n ### Theme(s) for Week \n- \n\n\n ## Goals for Week \n\n ### Overall \n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '
//let firstDayDate = moment().week(inputWeek).startOf().add(1, 'day').format('YYYY-MM-DD')
let firstDayDate = moment().week(inputWeek).startOf().format('YYYY-MM-DD')
let seventhDayDate = moment().week(inputWeek).startOf().add(6, 'day').format('YYYY-MM-DD')

// let firstDay = "##### First day Number: ![[" + moment().week(inputWeek).startOf().add(1, 'day').format('YYYY-MM-DD') + "]]"
// let secondDay = "##### Second day Number: ![[" + moment().week(inputWeek).startOf().add(2, 'day').format('YYYY-MM-DD') + "]]"
// let thirdDay = "##### Third day Number: ![[" + moment().week(inputWeek).startOf().add(3, 'day').format('YYYY-MM-DD') + "]]"
// let forthDay = "##### Forth day Number: ![[" + moment().week(inputWeek).startOf().add(4
//     , 'day').format('YYYY-MM-DD') + "]]"
// let fifthDay = "##### Fifth day Number: ![[" + moment().week(inputWeek).startOf().add(5, 'day').format('YYYY-MM-DD') + "]]"
// let sixthDay = "##### Sixth day Number: ![[" + moment().week(inputWeek).startOf().add(6, 'day').format('YYYY-MM-DD') + "]]"
// let seventhDay = "##### SeventhDay Number: ![[" + moment().week(inputWeek).startOf().add(7, 'day').format('YYYY-MM-DD') + "]]"

let gayleSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'gayle:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Gayle interactions: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let reframeSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'reframe:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Reframe: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let nlpSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'nlp:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'NLP: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let meditationSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'meditation:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Meditation: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

console.log(gayleSection);
// exit()


// Write out to markdown file in Vault
// fs.writeFileSync(filePath + fileName, startTemplate + "\n Metrics \n" + gayleSection + "\n" + reframeSection + "\n" + nlpSection + "\n" + meditationSection)'\n -------- \n' + firstDay + '\n' + secondDay + '\n' + thirdDay + '\n' + forthDay + '\n' + fifthDay + '\n' + sixthDay + '\n' + seventhDay


fs.writeFileSync(filePath + fileName, startTemplate + "\n\n### Metrics \n" + gayleSection + "\n" + reframeSection + "\n" + nlpSection + "\n" + meditationSection)