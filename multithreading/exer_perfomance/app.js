const { Worker } = require("worker_threads");
const { performance, PerformanceObserver } = require("perf_hooks");
const { fork } = require("child_process");
const { readFileSync } = require("fs");

const file = readFileSync("./video.mp4");

const performanceObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration}`);
  });
});

performanceObserver.observe({ entryTypes: ["measure"] });

const workerFunction = (array) => {
  return new Promise((resolve, reject) => {
    performance.mark("worker start");
    const worker = new Worker("./worker.js", {
      workerData: { array, file },
    });
    worker.on("message", (msg) => {
      performance.mark("worker end");
      performance.measure("worker", "worker start", "worker end");
      resolve(msg);
    });
  });
};

const forkFunction = (array) => {
  return new Promise((resolve, reject) => {
    performance.mark("fork start");
    const forkProcess = fork("./fork.js");
    forkProcess.send({ array, file });
    forkProcess.on("message", (msg) => {
      performance.mark("fork end");
      performance.measure("fork", "fork start", "fork end");
      resolve(msg);
    });
  });
};

const main = async () => {
  await workerFunction([25, 19, 48, 30]);
  await forkFunction([25, 19, 48, 30]);
};

main();
