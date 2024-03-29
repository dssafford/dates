// This creates a monthly obsidian file on my macs, filepath based on machine
// node obsidianmonthlytemplate.js 10  is the command line call.  Need the desired month added to the call
// note:  call can be used from keyboard maestro macro and called that way...

const moment = require('moment')
const fs = require('fs');

const { exit } = require('process');

const inputMonth = process.argv[2];
console.log('Month input for template = ' + inputMonth);

// const startOfMonth = moment().startOf('month').add(inputMonth, 'months').format('YYYY-MM-DD');
// const startOfMonth = moment().year()
const startOfMonth = moment([moment().year(), inputMonth - 1]).format('YYYY-MM-DD')
const endOfMonth = moment(startOfMonth).endOf('month').format('YYYY-MM-DD')

console.log(startOfMonth);
console.log(endOfMonth);

var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);



//exit();


// exit()


// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/CurrentYear/'
const fileName = moment().format('YYYY') + '-0' + inputMonth + '.md';
let result = "";

let startTemplate = '# Monthly Review \n\n ### Theme for Month \n- \n\n\n ### Goals for Month\n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '

let inputDate = moment().format('YYYY') + '-' + inputMonth;


// let firstMonday = getFirstMondayWithDate('2023-10-01').format('YYYY-MM-DD');
let firstMonday = getFirstMondayWithDate(inputDate).format('YYYY-MM-DD');
console.log("first monday: " + firstMonday);
//exit()

function getFirstMondayWithDate(date) {
    result = moment(date).startOf('month');
    while (result.day() !== 1) {
        result.add(1, 'day');
    }
    return result;
}

let firstWeek = "##### First Week Number: [[2023-W" + moment(firstMonday).format("w") + "]]"
let secondWeek = "##### Second Week Number: [[2023-W" + moment(firstMonday).add(1, 'week').format("w") + "]]"
let thirdWeek = "##### Third Week Number: [[2023-W" + moment(firstMonday).add(2, 'week').format("w") + "]]"
let forthWeek = "##### Forth Week Number: [[2023-W" + moment(firstMonday).add(3, 'week').format("w") + "]]"

// let gayleSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'gayle:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Gayle interactions: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

// let reframeSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'reframe:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary: \n\ttemplate: 'Reframe: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

// let nlpSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'nlp:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary: \n\ttemplate: 'NLP: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

// let meditationSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'meditation:\\s+(?<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)'\nfolder: DougVault/Calendar/2023\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary: \n\ttemplate: 'Meditation: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let meditationSection = "\n``` tracker\nsearchType: text\nsearchTarget: meditation\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Meditation: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let overallSection = "\n``` tracker\nsearchType: dvField\nsearchTarget: overall\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Overall Day Average for week: {{ average()}}'\n\tstyle: 'color: red; '\n```"

let husbandSection = "\n``` tracker\nsearchType: dvField\nsearchTarget: husband\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Overall Husband Average for week: {{ average()}}'\n\tstyle: 'color: red; '\n```"

let coworkerSection = "\n``` tracker\nsearchType: dvField\nsearchTarget: coworker\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Overall Co-Worker Average for week: {{ average()}}'\n\tstyle: 'color: red; '\n```"

let mindfulnessSection = "\n``` tracker\nsearchType: text\nsearchTarget: presence\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Mindfulness Checkpoints for week: {{ sum()-7}}'\n\tstyle: 'color: red; '\n```"

let coolcalmcollectedSection = "\n``` tracker\nsearchType: text\nsearchTarget: coolcalmcollected\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + startOfMonth + "\nendDate: " + endOfMonth + "\nsummary:\n\ttemplate: 'Cool, Calm and Collected Checkpoints for week: {{ sum()-7}}'\n\tstyle: 'color: red; '\n```"

//exit()

fs.writeFileSync(filePath + fileName, startTemplate + "\n\n### Metrics \n" + meditationSection + "\n" + mindfulnessSection + "\n" + coolcalmcollectedSection + "\n\n### Scores\n" + overallSection + "\n" + husbandSection + "\n" + coworkerSection + '\n\n' + firstWeek + '\n' + secondWeek + '\n' + thirdWeek + '\n' + forthWeek)


// Write out to markdown file in Vault
// fs.writeFileSync(filePath + fileName, startTemplate + '\n -------- \n' + gayleSection + '\n' + reframeSection + '\n' + nlpSection + '\n' + meditationSection + '\n\n' + firstWeek + '\n' + secondWeek + '\n' +
//     thirdWeek + '\n' + forthWeek)
