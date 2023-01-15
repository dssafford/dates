// // give the year and week
// let year = 2023;
// let week = 2;

// // first date of year
// let firstDateOfYear = new Date(year, 0, 1);
// // get the day of first date in the year
// let firstDayOfYear = firstDateOfYear.getDay();
// console.log("first day of year", firstDayOfYear);

// let timeofOneDay = 60 * 60 * 24 * 1000;
// let timeofOneWeek = 60 * 60 * 24 * 7 * 1000;
// // last day of the week, 6 days later
// let timeof6Day = 60 * 60 * 24 * 6 * 1000;

// // if week start from Monday
// let timeOfFirstDay = firstDateOfYear.getTime() - (timeofOneDay * (firstDayOfYear - 1)) + timeofOneWeek * (week - 1);
// let timeOfLastDay = timeOfFirstDay + timeof6Day;
// console.log("week start from Monday");
// console.log(new Date(timeOfFirstDay).toString());
// console.log(new Date(timeOfLastDay).toString());



// if week from Sunday
// timeOfFirstDay = firstDateOfYear.getTime() - (timeofOneDay * (firstDayOfYear - 0)) + timeofOneWeek * (week - 1);
// timeOfLastDay = timeOfFirstDay + timeof6Day;
// console.log("week start from Sunday");
// console.log(new Date(timeOfFirstDay).toString());
// console.log(new Date(timeOfLastDay).toString());

let date = new Date();
let firstDay = date.setMonth(5, 1)

//var date = new Date();
//var firstDay = new Date(date.getFullYear(), date.setMonth(2));
//var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

console.log('firstDay = ' + formatDate(firstDay));
//console.log('lastDay = ' + lastDay);

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