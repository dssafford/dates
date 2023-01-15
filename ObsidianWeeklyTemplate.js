// This creates a weekly obsidian file on my macs, filepath based on machine
// node obsidianweeklytemplate.js 41  is the command line call.  Need the desired month added to the call
// note:  call can be used from keyboard maestro macro and called that way...

//const moment = require('moment')
const fs = require('fs');
const { exit } = require('process');
const week = process.argv[2];

// give the year and week
let year = 2023;
//let week = 2;

// first date of year
let firstDateOfYear = new Date(year, 0, 1);
// get the day of first date in the year
let firstDayOfYear = firstDateOfYear.getDay();
console.log("first day of year", firstDayOfYear);

let timeofOneDay = 60 * 60 * 24 * 1000;
let timeofOneWeek = 60 * 60 * 24 * 7 * 1000;
// last day of the week, 6 days later
let timeof6Day = 60 * 60 * 24 * 6 * 1000;
// 
// if week start from Monday
let timeOfFirstDay = firstDateOfYear.getTime() - (timeofOneDay * (firstDayOfYear - 1)) + timeofOneWeek * (week - 1);
let timeOfLastDay = timeOfFirstDay + timeof6Day;
console.log("Week start from Monday");
console.log(new Date(timeOfFirstDay).toString());
console.log(new Date(timeOfLastDay).toString());
console.log('-------------------------------------------');
let firstDayDate = formatDate(new Date(timeOfFirstDay).toString());
let seventhDayDate = formatDate(new Date(timeOfLastDay).toString());
console.log('firstDayDate = ' + firstDayDate);
console.log('seventhDayDate = ' + seventhDayDate);


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


// exit()

// console.log('Week number input for template = ' + inputWeek);
// console.log('first day of week for input week = ' + moment().week(inputWeek).startOf().add(0, 'day').format('YYYY-MM-DD'));
// exit()

// const first = moment(dv.current().file.name);
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/CurrentYear/'
const fileName = year + '-W0' + week + '.md';
let result = "";

let startTemplate = '# Weekly Review \n\n ### Theme(s) for Week \n- \n\n\n ## Goals for Week \n\n ### Overall \n\n ##### Home \n - [ ] \n\n\n ##### Work \n - [ ] '

//let firstDayDate = moment().week(inputWeek).startOf().add(0, 'day').format('YYYY-MM-DD')
// let firstDayDate = moment().week(inputWeek).startOf().add(1, 'day').format('YYYY-MM-DD')
// let seventhDayDate = moment().week(inputWeek).startOf().add(7, 'day').format('YYYY-MM-DD')

// let firstDay = "##### First day Number: ![[" + moment().week(inputWeek).startOf().add(1, 'day').format('YYYY-MM-DD') + "]]"
// let secondDay = "##### Second day Number: ![[" + moment().week(inputWeek).startOf().add(2, 'day').format('YYYY-MM-DD') + "]]"
// let thirdDay = "##### Third day Number: ![[" + moment().week(inputWeek).startOf().add(3, 'day').format('YYYY-MM-DD') + "]]"
// let forthDay = "##### Forth day Number: ![[" + moment().week(inputWeek).startOf().add(4
//     , 'day').format('YYYY-MM-DD') + "]]"
// let fifthDay = "##### Fifth day Number: ![[" + moment().week(inputWeek).startOf().add(5, 'day').format('YYYY-MM-DD') + "]]"
// let sixthDay = "##### Sixth day Number: ![[" + moment().week(inputWeek).startOf().add(6, 'day').format('YYYY-MM-DD') + "]]"
// let seventhDay = "##### SeventhDay Number: ![[" + moment().week(inputWeek).startOf().add(7, 'day').format('YYYY-MM-DD') + "]]"

let meditationSection = "\n``` tracker\nsearchType: text\nsearchTarget: 'meditation:\\s+(?<value>[\-]?[0-9]+[\.][0-9]+|[\-]?[0-9]+)'\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Meditation: {{ sum()}}'\n\tstyle: 'color: red; '\n```"

let overallSection = "\n``` tracker\nsearchType: dvField\nsearchTarget: overall\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Overall Day Average for week: {{ average()}}'\n\tstyle: 'color: red; '\n```"

let husbandSection = "\n``` tracker\nsearchType: dvField\nsearchTarget: husband\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Overall Husband Average for week: {{ average()}}'\n\tstyle: 'color: red; '\n```"

let coworkerSection = "\n``` tracker\nsearchType: dvField\nsearchTarget: coworker\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Overall Co-Worker Average for week: {{ average()}}'\n\tstyle: 'color: red; '\n```"

let mindfulnessSection = "\n``` tracker\nsearchType: text\nsearchTarget: presence\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Mindfulness Checkpoints for week: {{ sum()-7}}'\n\tstyle: 'color: red; '\n```"

let coolcalmcollectedSection = "\n``` tracker\nsearchType: text\nsearchTarget: coolcalmcollected\nfolder: DougVault/Calendar/CurrentYear\nstartDate: " + firstDayDate + "\nendDate: " + seventhDayDate + "\nsummary:\n\ttemplate: 'Cool, Calm and Collected Checkpoints for week: {{ sum()-7}}'\n\tstyle: 'color: red; '\n```"

//console.log(gayleSection);
// exit()


fs.writeFileSync(filePath + fileName, startTemplate + "\n\n### Metrics \n" + meditationSection + "\n" + mindfulnessSection + "\n" + coolcalmcollectedSection + "\n\n### Scores\n" + overallSection + "\n" + husbandSection + "\n" + coworkerSection)

