
// Implicit Conversion to String

// numeric string used with + gives string type
let result;

result = '3' + 2;
console.log(result) // "32"

result = '3' + true;
console.log(result); // "3true"

result = '3' + undefined;
console.log(result); // "3undefined"

result = '3' + null;
console.log(result); // "3null"


// Implicit Conversion to Number

// let num;

num = '4' - '2';
console.log(num); // 2

num = '4' - 2;
console.log(num); // 2

num = '4' * 2;
console.log(num); // 8

num = '4' / 2;
console.log(num); // 2

// Non-numeric String Results to NaN

// non-numeric string used with - , / , * results to NaN

let str;

str = 'hello' - 'world';
console.log(str); // NaN

str = '4' - 'hello';
console.log(str); // NaN

// Implicit Boolean Conversion to Number

// if boolean is used, true is 1, false is 0

let bol;

bol = '4' - true;
console.log(bol); // 3

bol = 4 + true;
console.log(bol); // 5

bol = 4 + false;
console.log(bol); // 4

// JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1

// null Conversion to Number

// null is 0 when used with number
let nul;

nul = 4 + null;
console.log(nul);  // 4

nul = 4 - null;
console.log(nul);  // 4

// undefined used with number, boolean or null

// Arithmetic operation of undefined with number, boolean or null gives NaN

let und;

und = 4 + undefined;
console.log(und);  // NaN

und = 4 - undefined;
console.log(und);  // NaN

und = true + undefined;
console.log(und);  // NaN

und = null + undefined;
console.log(und);  // NaN

// JavaScript Explicit Conversion

// Convert to Number Explicitly

let numexplict;

// string to number
numexplict = Number('324');
console.log(numexplict); // 324

numexplict = Number('324e-1')
console.log(numexplict); // 32.4

// boolean to number
numexplict = Number(true);
console.log(numexplict); // 1

numexplict = Number(false);
console.log(numexplict); // 0


numexplict = Number(null);
console.log(numexplict);  // 0

numexplict = Number(' ')
console.log(numexplict);  // 0

// Convert to String Explicitly

//number to string
let strg;
strg = String(324);
console.log(strg);  // "324"

strg = String(2 + 4);
console.log(strg); // "6"

//other data types to string
strg = String(null);
console.log(strg); // "null"

strg = String(undefined);
console.log(strg); // "undefined"

// Convert to Boolean Explicitly

let bolexplict;
bolexplict = Boolean('');
console.log(bolexplict); // false

bolexplict = Boolean(0);
console.log(bolexplict); // false

bolexplict = Boolean(undefined);
console.log(bolexplict); // false

bolexplict = Boolean(null);
console.log(bolexplict); // false

bolexplict = Boolean(NaN);
console.log(bolexplict); // false


// String to Int
let num1 = '10'
let numInt1 = parseInt(num1)
console.log(numInt1) // 10

let num2 = '10'
let numInt2 = Number(num2)
console.log(numInt2) // 10

let num3 = '10'
let numInt3 = +num3
console.log(numInt3) // 10

// String to Float

let num4 = '9.81'
let numFloat4 = parseFloat(num4)
console.log(numFloat4) // 9.81

let num5 = '9.81'
let numFloat5 = Number(num5)
console.log(numFloat5) // 9.81

let num6 = '9.81'
let numFloat6 = +num6
console.log(numFloat6) // 9.81


// Float to Int
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9 
