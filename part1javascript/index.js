console.log("hello");
console.log(1 + 2);
console.log("hello" + "world");

const PI = 3.1415;
console.log(PI);

const a = 1_1_1;

console.log(a);

console.log(`1+2=${1 + a}`);

let sumfi = 0;
function fibi(input) {
  for (let i = 0; i <= input; i++) {
    sumfi += fibi(n - 1) + fibi(n - 2);
  }
  return fibi(n - 1) + fibi(n - 2);
}

const array1 = [1, 3];
console.log(array1.includes(1));

const array2 = [...array1];
array2.push(8);
console.log(array2);
console.log(array1);
const sumarray = [...array1, array2];
console.log("sumarray ${sumarray}");
console.log(`sumarray ${sumarray}`);
