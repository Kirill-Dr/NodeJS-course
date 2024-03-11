const a = -1;
if (a >= 0) {
    const log = require('./characters.js');
    log();
} else {
    console.log('Меньше 0');
}

// const { characters, stealRing } = require('./characters.mjs');


// let myChars = characters;
//
// myChars = stealRing(myChars, 'Фродо');
//
// for (const c of characters) {
//     console.log(c);
// }