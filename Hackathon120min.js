// Bai 1
// function largest(a, n) {
//   a.sort();

//   let temp = a[n - 1];

//   for (let i = n - 2; i >= 0; i--) {
//     if (temp != a[i]) {
//       if (i == 0) return a[0];
//       if (i - 1 >= 0) {
//         if (a[i] != a[i - 1]) {
//           return a[i];
//         }
//       }

//       temp = a[i];
//     }
//   }

//   return -1;
// }
// a = prompt("Số lớn nhất và xuất hiện 1 lần trong dãy 5 số bạn nhập:");
// let arr = a.split("");
// let N = arr.length;
// alert(largest(arr, N));

// Bai3
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
//   .filter((element) => element >= "a" && element <= "z")
//   .join("");

// alert(newStr);

// Bai 5
// let string = prompt("Bạn hãy nhập câu bất kì");
// alert([...string].reverse().join(""));
