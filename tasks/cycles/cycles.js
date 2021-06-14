/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign result to corresponding variable
 * for - forFactorial
 * while - whileFactorial
 * do..while - doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial = 1;
for (let i = n; i > 1; i--) {
  forFactorial *= i;
}

whileFactorial = 1;
let i = n;
while (i > 1) {
  whileFactorial *= i;
  i--;
}

doFactorial = 1;
i = n;
do {
  doFactorial *= i;
  i--;
}
while (i > 1);

/** TODO
 * return concatenated string from an array of substring
 * assign result to variable str
 */
let str;
const substr = ["I", " love", " JS"];
str = "";
for (let element of substr) {
  str += element;
}


/** TODO
 * calculate a total of income of certain person
 * assign result to variable totalIncome
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};
totalIncome = 0;
for (const prop in personIncomes) {
  totalIncome += personIncomes[prop];
}


module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};
