console.log("start");

setTimeout(() => {
  console.log("Bro");
}, 2000);

console.log("end");

const fs = require("fs");

fs.readFile("text01.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});

fs.readFile("text01x.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("error");
  } else console.log(data);
});

fs.readFile("text01.txt", { encoding: "utf-8" }, (err1, data1) => {
  fs.readFile("text02.txt", { encoding: "utf-8" }, (err2, data2) => {
    console.log(data1);
    console.log(data2);
  });
});

const axios = require("axios");

axios.get("https://randomuser.me/api/").then((resp) => {
  console.log(resp.data.results[0].gender);
});

axios.get("https://randomuser.me/api/").then((resp) => {
  console.log(resp.data.results[0].name.title);
});

async function getRandomuser() {
  try {
    const resp = await axios.get("https://randomuser.me/api/");
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
}
getRandomuser();
