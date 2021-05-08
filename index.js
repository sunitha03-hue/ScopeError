function myFunction() {
	let i = 10;
	return 10 + i;
  console.log(i);
}
console.log(myFunction())

function myFunction1(n) {
   let a = 100;
   return a + n;
}

let x = 0;

x = myFunction1(x);

const input = require('readline-sync');

function hello(name) {
   console.log('Hello,', name);
   name = 'Ruth';
   return doubleName(name);
}

function doubleName(name){
   console.log(name+name);
   return name+name;
}
let name = input.question("Please enter your name: ");

hello(name);
doubleName(name);
console.log(name);

let a = 0;
function myFunction2() {
   let a = 10;
   return a;
}
console.log(myFunction2())