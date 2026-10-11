console.log(!0); // true
console.log(!1); // false
console.log(!!0); // false => !true  => !!0

//// Người dùng nhập từ bàn phím vào và lưu dữ liệu tại biến ntn?
// let a = prompt("Mời người dùng nhập vào 1 chuỗi")
// console.log("a: ", a); /// string
// console.log(typeof a);

//// người dùng nhập vào số nguyên N
// let n = prompt("Mời nhập số nguyên N: ") // string
// console.log(typeof n); // string
// n = Number(n)
// console.log(typeof n); //

// console.log(1);
// console.log(2);
// console.log(3);

// console.log(100);

/// In ra i từ 1 - 50

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

////// Vòng lặp While
// let i = 1
// while (i <= 50) {
//     console.log(i); // 1, .... 50 
//     i++ // i = i + 1
// }
// Kết thúc vòng lặp i = 51



//// Người dùng nhập từ bàn phím vào số nguyên dương N: 
let n 
do {
    n = Number(prompt("Mời người dùng nhập số nguyên dương N: "))
    console.log(n); 
}
while (n > 0 && n % 1 !== 0);
console.log(n);
// Kết thúc vòng While kỳ vọng N: là số nguyên dương

/// VD: 2 % 2 == 0 => true
// VD: 2.5 % 2 == 0 => false
// 2.75   => 2 + 0.75 => 2.75 % 1 = 0.75