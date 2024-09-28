"use strict"
let x = typeof (100);
console.log(x, "Type of 100");

let y = typeof (73.9);
console.log (y, "Type of 73.9");

let m =typeof ("NaN");
console.log (m, "Type of NaN");

let z =typeof ("Water");
console.log (z, 'Type of "Water"');

let q =typeof (10 > 9);
console.log (q, "Type of false");

let w =typeof (9 != 11);
console.log (w, "Type of 9 != 11");

let  i=typeof ("Orang" + "e");
console.log (i, "Type of Orang  +  e");

let  u=typeof (" Orange - s ");
console.log (u, "Type of  Orange - s ");

let result1 = typeof ("4" + "8");
console.log(result1, 'Type of "4" + "8"');

let result2 = typeof ("4" - "8");
console.log(result2, 'Type of "4" - "8"');

let result3 = typeof ("name" + 3);
console.log(result3, 'Type of "name" + 3');

let result4 = typeof ("name" - 3);
console.log(result4, 'Type of "name" - 3');

let result5 = typeof (82 * "word");
console.log(result5, 'Type of 82 * "word"');

let result6 = typeof (1 + "hello");
console.log(result6, 'Type of 1 + "hello"');

let result7 = typeof ("hello" + 1);
console.log(result7, 'Type of "hello" + 1');

let result8 = typeof (1 + true);
console.log(result8, 'Type of 1 + true');

let result9 = typeof ("hello" + true);
console.log(result9, 'Type of "hello" + true');

let result10 = typeof Infinity;
console.log(result10, 'Type of Infinity');

let result11 = typeof (1 == '1');
console.log(result11, 'Type of 1 == "1"');

let result12 = typeof (1 === '1');
console.log(result12, 'Type of 1 === "1"');



