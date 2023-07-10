let second2 = 0;
const p3 = document.getElementById("timer2");
setInterval(() => {
  second2++;
  p3.innerText = `Time2 elapsed : ${second}`;
  if (second2 % 2 === 0) p3.style.color = "blue";
  else p3.style.color = "red";
}, 1000);

let second = 0;
const p1 = document.getElementById("timer");
setInterval(() => {
  second++;
  p1.innerText = `time elapse : ${second}`;
}, 1000);

for (let i = 0; i < 5; i++) {
  const p2 = document.createElement("p");
  p2.innerText = `i am paragrah ${i}`;
  document.body.appendChild(p2);
}

let clickCount = 0;
const p4 = document.getElementById("counter");
const clickCallback = () => {
  clickCount++;
  p4.innerText = `Click ${clickCount} Time(s)`;
};

let clickCount2 = 0;
const p5 = document.getElementById("counter2");
const btn = document.getElementById("clickBtn");
btn.onclick = () => {
  clickCount2++;
  p5.innerText = `Click ${clickCount2} Time(s)`;
};

const input = document.getElementById("textInput");
clickBtn2.onclick = () => {
  alert(input.value);
};

const inputcolor = document.getElementById("colorInput");
inputcolor;
