// Bai 1
// let a = prompt("input: ");
// let array = a.split("");
// let arrayUnique = [];
// for (let i in array) {
//   let isUnique = true;
//   for (let j in array) {
//     if (i !== j && array[i] === array[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     arrayUnique.push(array[i]);
//   }
// }
// console.log(arrayUnique[arrayUnique.length - 1]);

// Bai 3
// function draw() {
//   let n = 7;
//   let m = 13;
//   let heart = "";

//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < m; j++) {
//       if (
//         (i === 0 && (j === 1 || j === 3 || j === 9 || j === 11)) ||
//         (i === 1 && (j === 0 || j === 6 || j === 12)) ||
//         (i === 2 && (j === 1 || j === 11)) ||
//         (i === 3 && (j === 3 || j === 9)) ||
//         (i === 4 && j === 6)
//       ) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     heart += row + "\n";
//   }

//   return heart;
// }

// alert(draw());

// Bai 4
// let string = prompt("Nhập cụm chữ và số bất kì:");
// let newStr = string
//   .split("")
//   .filter((element) => element >= "a" && element <= "z")|| (element>="A" && element <= "Z")
//   .join("");

// alert(newStr);

// Bai 5
// let string = prompt("Bạn hãy nhập câu bất kì");
// let newStr = [...string].reverse().join("");

// let newStr2 = newStr.split(" ").reverse().join(" ");
// console.log(newStr2);
