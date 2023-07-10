setTimeout(() => {
  console.log("hi1");
}, 1000);
setTimeout(() => {
  console.log("hi2");
}, 2000);

const fs = require("fs");

fs.readFile("part3javascript/text.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});

load();
