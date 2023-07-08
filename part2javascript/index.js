let a = [1, 2, 5, 7];
let b = [];

for (let i = 0; i < a.length; i++) {
  b[i] = a[i] * a[i];
}

console.log(b);
const c = [];

for (const x of a) {
  c.push(x * x);
}
console.log(c);

const isEven = (x) => {
  if (x % 2 === 0) {
    return true;
  } else return false;
};

console.log(isEven(2));

const even = (x) => x % 2 === 0;

console.log(even(3));

const names = ["non", "yai", "golf"];

const upper = names.map((x) => x.toLocaleUpperCase());

console.log(upper);

const z = [1, 2, 5, 6];
const y = z.map((x) => (x % 2 === 0 ? x * x * x : x)); //x**3

console.log(y);

const v = [2, 3, 6, 9, 12];
const q = v.filter((x) => (x % 2 === 0) & (x % 3 === 0));
console.log(q);

const person = {
  name: "John",
  age: 25,
};
person.age = 50;
person.gender = "Female";

console.log(person);

const students = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

const filteredScores = students
  .filter((x) => x.name.length > 3)
  .map((x) => x.score);
console.log(filteredScores);
