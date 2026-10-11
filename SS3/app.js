// let num1 = 10
// let 1num = 20
// let num = 10

// let num2 = 0/0
// console.log("num2: ", num2); // NaN

// let num3 = "Hello" * 10
// console.log("num3: ", num3); //

// let num4 = "I love you" * 3000
// console.log("num4: ", num4);

// let num5 = 1/0
// console.log("num5: ", num5);

////// TOÁN TỬ
//// Toán tử số học: +, -, *, /, %
let a = 1;
let b = 2;
// console.log(a + b); // 3
// console.log(a - b); // -1
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); // 1
// console.log(75 % 100); // 75
// console.log(10/3); // 1

//// Toán tử gán: =, +=, -=, *=, /=
// console.log(a += 1); // a = a + 1 => a = 2
// console.log(b-=3); // b = b - 3 = 2 - 3 = -1
// console.log(a*=2); // a = a * 2 = 2 * 2 = 4
// console.log(b/=1); // b = b / 1 = -1 / 1 = -1
// console.log(a %= 5); // a = a % 5 = 4 % 5 = 4

//// Toán tử so sánh: ==,===, !=, !==, <, >, <=, >=
// a = 1, b = 2
// console.log(a == b); // false
// console.log(2 == "2"); // true => "==": Chỉ so sánh giá trị (không so sánh kiểu dữ liệu)
// console.log(2 === "2"); // false => "===": So sánh về giá trị & KDL
// console.log(1 != 1); // false
// console.log(1 != "1"); // false
// console.log(1 !== "1"); // true
// console.log(1 <= "1"); // true

// ////Toán tử logic: &&, || , not
// console.log(1 < 2 && 2 > 1); // true && true => true
// console.log(1 > 2 && 2 > 1); // false && true => false
// console.log(2 < 3 || 3 < 2); // true || false => true

// console.log(!1); // false
// console.log(!0); // true

///// Ví dụ về câu điều kiện
diem_thi_10 = 44.75;
if (diem_thi_10 >= 45) {
  console.log("Đỗ trường MindX");
}
else if (diem_thi_10 > 44) {
  console.log("Đỗ trường MindX sau khi đã hạ điểm");
}
else {
  console.log("Bạn trượt rồi");
}
