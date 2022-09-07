const validator = require('validator');

const chalk = import('chalk');
const yargs = require('yargs')
const { exit } = require('process');


//const notes = require('./notes.js');

// const command = process.argv[2];
// console.log('contents of process.argv = ' + process.argv);
// console.log('contents of yargs.argv = ' + yargs.argv);

// exit()

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //notes.addNote(argv.title, argv.body)
        console.log('Date: ' + argv.title);
        //console.log('Body: ' + argv.body);
    }
})
// yargs.command({
//     command: 'remove',
//     describe: 'remove a note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         notes.removeNote(argv.title);
//         console.log('remove a note');
//     }
// })


// yargs.command({
//     command: 'list',
//     describe: 'List your notes',
//     handler: function () {
//         console.log('Listing out all notes');
//         notes.listNotes();

//     }
// })
// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function (argv) {
//         //console.log('Finding a note with title ' + argv.title);
//         notes.readNote(argv.title)

//     }
// })

yargs.parse();
// if (command === 'add') {
//     console.log('Adding Note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }





// const msg = getNotes();
// console.log(msg)

// console.log('is email = ' + validator.isEmail('doug.safford@yahoo.com'));

// console.log('is URL = ' + validator.isURL('doug'));
// //const greenMsg = chalk.green.inverse.bold('Success');

// // //const firstName = require('./utils');

// //const { name, add, dougMultiply } = require('./utils');
// const dude = require('./utils');

// //const name = 'Douglas';

// console.log('dougMame = ' + dude.name);
// console.log('addName = ' + dude.add(1, 2));
// console.log('function of multiply = ' + dude.dougMultiply(8, 2));
// console.log(chalk.green.bold('Hello World') + chalk.green.bold('!'));
