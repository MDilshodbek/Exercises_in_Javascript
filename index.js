// exercise - 1;
// var n = 10;

// for (var i = 1; i <= n; i++) console.log(i);

// let i = 1;
// while (i <= n) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= n);

// exercise - 2;

// var number = 14;

// if (number % 2 === 0) console.log("Even");
// else console.log("Odd");

// switch (number % 2) {
//   case 0:
//     console.log("Even");
//     break;
//   case 1:
//     console.log("Odd");
//     break;
// }

// console.log(number % 2 === 0 ? "Even" : "Odd");

// exercise - 3
// var n = 10;
// sum = 0;

// for (let i = 1; i <= n; i++)
//   if (i % 2 == 0) {
//     sum += i;
//     console.log(sum);
//   }

// let i = 0;
// while (i <= n) {
//   i += 2;
//   console.log(sum);
//   sum += i;
// }

// do {
//   console.log(sum);
//   i += 2;
//   sum += i;
// } while (i <= n);

// exercise - 4

// var n = 2;
// if (n > 0) console.log("Positive");
// else if (n < 0) console.log("Negative");
// else console.log("Zero");

// switch (Math.sign(n)) {
//   case 1:
//     console.log("Positive");
//     break;
//   case -1:
//     console.log("Negative");
//     break;
//   case 0:
//     console.log("Zero");
//     break;
// }

// console.log(n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero");

// exercise - 5

// var n = 7;

// for (let i = 1; i <= 10; i++) console.log(n * i);

// let i = 1;
// while (i <= 10) {
//   console.log(n * i);
//   i++;
// }

// do {
//   console.log(n * i);
//   i++;
// } while (i <= 10);

// exercise - 6    Sum of a digit
// var n = 123;
// n = String(n);

// var sum = 0;

// for (let i = 0; i < n.length; i++) {
//   sum += Number(n[i]);
// }
// console.log(sum);

// i = 0;
// while (i < n.length) {
//   sum += Number(n[i]);
//   i++;
// }
// console.log(sum);

// do {
//   sum += Number(n[i]);
//   i++;
// } while (i < n.length);
// console.log(sum);

// exercise - 7    Prime number
// var n = 10;

// for (let i = 2; i <= n; i++) {
//   let Prime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       Prime = false;
//       break;
//     }
//   }
//   if (Prime) {
//     console.log(i + " - Prime number");
//   }
// }

//Exercise - 8 Factorial calculation

// var n = 4;
// sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum *= i;
// }
// console.log(sum);

// let i = 1;
// while (i <= n) {
//   sum *= i;
//   i++;
// }
// console.log(sum);

// do {
//   sum *= i;
//   i++;
// } while (i <= n);
// console.log(sum);

// Exercise - 9   Leap year

var year = 2021;

// if (year % 4 === 0) console.log("Leap year");
// else console.log("NOT a Leap year");

// switch (year % 4) {
//   case 0:
//     console.log("Leap Year");
//     break;
//   case 1:
//     console.log("NOT a Leap year");
// }

console.log(year % 4 === 0 ? "Leap year" : "NOT a Leap year");
