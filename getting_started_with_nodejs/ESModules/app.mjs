// import { characters, greet } from './characters.mjs';
// import * as char from './characters.mjs';
// import log, { characters, greet } from './characters.mjs';
// import log, * as char from './characters.mjs';
// import log, { characters, greet as hello } from './characters.mjs';

// for (const c of characters) {
//     greet(c);
// }

// for (const c of char.characters) {
//     char.greet(c);
// }

// log();
//
// for (const c of characters) {
//     hello(c);
// }

async function main() {
    try {
        const {characters, greet} = await import('./characterss.mjs');
        for (const c of characters) {
            greet(c);
        }
    } catch (e) {
        console.log('Ошибка');
    }
}
main();