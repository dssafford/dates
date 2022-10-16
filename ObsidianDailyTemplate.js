// This creates a weekly obsidian file on my macs, filepath based on machine
// node obsidianweeklytemplate.js 41  is the command line call.  Need the desired month added to the call
// note:  call can be used from keyboard maestro macro and called that way...

const moment = require('moment')
const fs = require('fs');

const { exit } = require('process');

// const inputWeek = process.argv[2];


// console.log('Week number input for template = ' + inputWeek);

console.log('Today is ' + moment().format("YYYY-MM-DD"));

// console.log('first day of week for input week = ' + moment().week(inputWeek).startOf().add(1, 'day').format('YYYY-MM-DD'));
exit()



// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2022/'
const fileName = moment().format('YYYY-MM-DD') + 'x.md';
let result = "";

let startTemplate = '# Daily Review \n\n ### Theme for Week \n- [ ] \n\n\n ### Goals for Week \n- [ ] \n\n\n ### Overall \n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '


let gayleSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'gayle:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2022\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Gayle interactions: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let reframeSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'gayle:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2022\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Reframe: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let nlpSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'gayle:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2022\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'NLP: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let meditationSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'gayle:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2022\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Meditation: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

console.log(gayleSection);
// exit()


// Write out to markdown file in Vault
fs.writeFileSync(filePath + fileName, startTemplate + '\n -------- \n' + firstDay + '\n' + secondDay + '\n' + thirdDay + '\n' + forthDay + '\n' + fifthDay + '\n' + sixthDay + '\n' + seventhDay + "\n\n\n" + gayleSection + "\n" + reframeSection + "\n" + nlpSection + "\n" + meditationSection)
