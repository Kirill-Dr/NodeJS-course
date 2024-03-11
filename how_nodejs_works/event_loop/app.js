const fs = require("fs");

console.log("Init");

setTimeout(() => {
  console.log(performance.now(), "Timer 100");
}, 100);

setImmediate(() => {
  console.log("Immediate");
});

fs.readFile(__filename, () => {
  console.log("File read");
});

setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Done");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
  process.nextTick(() => console.log("Tick inside Timeout"));
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => console.log("Tick"));

console.log("Final");
