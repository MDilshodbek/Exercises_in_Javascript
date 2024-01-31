// exercise - 1;
// var n = 10;

// for (var i = 1; i <= n; i++) console.log(i);

// exercise - 2;

// var number = 13;

// if (number % 2 == 0) console.log("Even");
// else console.log("Odd");

// exercise - 3
// let n = 20;

// for (let i = 1; i <= n; i++) if (i % 2 == 0) console.log(i);

// exercise - 4
// var n = 0.5;

// if (n > 0) console.log("Positive");
// else if (n < 0) console.log("Negative");
// else console.log("Zero");

// exercise - 5
// var n = 4;

// for (let i = 1; i <= 10; i *= n) console.log(i);

// exercise - 6    Sum of a digit
// var n = 123;
// var sum = 0;

// while (n > 0) {
//   var rem = n % 10;
//   sum = sum + rem;
//   n = parseInt(n / 10);
// }
// console.log(sum);

// exercise - 7    Prime number
// var n = 36; {
//     if( n<=2) console.log("not a prime");
//     else if(let i = 2; i < n); console.log("not a prime too");
//     else console.log("prime");
// }

//Exercise - 8 Factorial calculation

// function fact(n) {
//   if (n == 0) return 1;
//   else return n * fact(n - 1);
// }
// let num = 3;
// let result = fact(num);
// console.log(result);

// Exercise - 9   Leap year
var year = 2023;

if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
  console.log("Leapyear");
else console.log("Not a leapyear");
