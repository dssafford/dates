
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
// console.log("first day of year", firstDayOfYear);

let timeofOneDay = 60 * 60 * 24 * 1000;
let timeofOneWeek = 60 * 60 * 24 * 7 * 1000;
// last day of the week, 6 days later
let timeof7Day = 60 * 60 * 24 * 6 * 1000;

let timeof2Day = 60 * 60 * 24 * 1 * 1000;
let timeof3Day = 60 * 60 * 24 * 2 * 1000;
let timeof4Day = 60 * 60 * 24 * 3 * 1000;
let timeof5Day = 60 * 60 * 24 * 4 * 1000;
let timeof6Day = 60 * 60 * 24 * 5 * 1000;

// if week start from Monday
let timeOfFirstDay = firstDateOfYear.getTime() - (timeofOneDay * (firstDayOfYear - 1)) + timeofOneWeek * (week - 1);
let timeOfSecondDay = timeOfFirstDay + timeof2Day;
let timeOfThirdDay = timeOfFirstDay + timeof3Day;
let timeOfForthDay = timeOfFirstDay + timeof4Day;
let timeOfFifthDay = timeOfFirstDay + timeof5Day;
let timeOfSixthDay = timeOfFirstDay + timeof6Day;
let timeOfLastDay = timeOfFirstDay + timeof7Day;

// console.log("Week start from Monday");
// console.log(new Date(timeOfFirstDay).toString());
// console.log(new Date(timeOfLastDay).toString());
// console.log('-------------------------------------------');

let firstDayDate = formatDate(new Date(timeOfFirstDay).toString());
let seventhDayDate = formatDate(new Date(timeOfLastDay).toString());

let secondDayDate = formatDate(new Date(timeOfSecondDay).toString());
let thirdDayDate = formatDate(new Date(timeOfThirdDay).toString());
let forthDayDate = formatDate(new Date(timeOfForthDay).toString());
let fifthDayDate = formatDate(new Date(timeOfFifthDay).toString());
let sixthDayDate = formatDate(new Date(timeOfSixthDay).toString());
// 
// console.log('firstDayDate = ' + firstDayDate);
// console.log('secondDayDate = ' + secondDayDate);
// console.log('thirdDayDate = ' + thirdDayDate);
// console.log('forthDayDate = ' + forthDayDate);
// console.log('fifthDayDate = ' + fifthDayDate);
// console.log('sixthDayDate = ' + sixthDayDate);
// console.log('seventhDayDate = ' + seventhDayDate);


//exit()

// Now create the weekly obsidian files
let filePath = '/Users/c023490/Vaults/DougVault/Calendar/2023/'
let fileNameIn = filePath + 'Daily2023.md'
let fileNameOut = filePath + firstDayDate + ".md"

// console.log("fileNameIn = " + fileNameIn);
// console.log("fileNameOut = " + fileNameOut);

// exit()

// First Day
// fs.copyFileSync(fileNameIn, filePath + firstDayDate + ".md")
// fs.copyFileSync(fileNameIn, filePath + secondDayDate + ".md")
// fs.copyFileSync(fileNameIn, filePath + thirdDayDate + ".md")
// fs.copyFileSync(fileNameIn, filePath + forthDayDate + ".md")
// fs.copyFileSync(fileNameIn, filePath + fifthDayDate + ".md")
// fs.copyFileSync(fileNameIn, filePath + sixthDayDate + ".md")
// fs.copyFileSync(fileNameIn, filePath + seventhDayDate + ".md")

let data
let result

// let data = fs.readFileSync(filePath + firstDayDate + ".md", { encoding: 'utf8' })
// let result = data.replace(/{{date}}/g, firstDayDate);
// fs.writeFileSync(filePath + firstDayDate + ".md", result, 'utf8');


// data = fs.readFileSync(filePath + secondDayDate + ".md", { encoding: 'utf8' })
// result = data.replace(/{{date}}/g, secondDayDate);
// fs.writeFileSync(filePath + secondDayDate + ".md", result, 'utf8');
// console.log('fileNameIn = ' + fileNameIn);
// console.log('fileNameOut = ' + filePath + firstDayDate + ".md");
// console.log('firstDayDate = ' + firstDayDate);
//exit()

// CreateAndProcessFile(fileNameIn, filePath + firstDayDate + ".md", firstDayDate)
CreateAndProcessFile(fileNameIn, filePath + secondDayDate + ".md", secondDayDate)
CreateAndProcessFile(fileNameIn, filePath + thirdDayDate + ".md", thirdDayDate)
CreateAndProcessFile(fileNameIn, filePath + forthDayDate + ".md", forthDayDate)
CreateAndProcessFile(fileNameIn, filePath + fifthDayDate + ".md", fifthDayDate)
CreateAndProcessFile(fileNameIn, filePath + sixthDayDate + ".md", sixthDayDate)
CreateAndProcessFile(fileNameIn, filePath + seventhDayDate + ".md", seventhDayDate)


// Create and Process file from Template Daily Note
function CreateAndProcessFile(fileIn, fileOut, dateIn) {
    console.log('fileIn = ' + fileIn);
    console.log('fileOut = ' + fileOut);
    console.log('dateIn = ' + dateIn);
    fs.copyFileSync(fileIn, fileOut)
    data = fs.readFileSync(fileOut, { encoding: 'utf8' })
    result = data.replace(/{{date}}/g, dateIn);
    fs.writeFileSync(fileOut, result, 'utf8');

}



// fs.readFileSync(fileNameOut, { encoding: 'utf8' }, function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     let result = data.replace(/{{date}}/g, firstDayDate);

//     fs.writeFileSync(fileOut, result, 'utf8', function (err) {
//         if (err) return console.log(err);
//     });
// });

// call the rest of the code and have it execute after 3 seconds
// fs.writeFileSync(filePath + fileName, startTemplate + "\n\n### Metrics \n" + meditationSection + "\n" + mindfulnessSection + "\n" + coolcalmcollectedSection + "\n\n### Scores\n" + overallSection + "\n" + husbandSection + "\n" + coworkerSection)

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