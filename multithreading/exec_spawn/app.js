// const { exec } = require("child_process");
//
// const childProcess = exec(
//   "dir /b",
//   { encoding: "utf8" },
//   (err, stdout, stderr) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//   }
// );
//
// childProcess.on("exit", (code) => {
//   console.log(`Код выхода: ${code}`);
// });

const { spawn } = require("child_process");

const childProcess = spawn("cmd.exe", ["/c", "dir /b"]);

childProcess.stdout.on("data", (data) => {
  console.log(`Stdout: ${data}`);
});

childProcess.stderr.on("data", (data) => {
  console.log(`Stderr: ${data}`);
});

childProcess.on("exit", (code) => {
  console.log(`Код выхода: ${code}`);
});
