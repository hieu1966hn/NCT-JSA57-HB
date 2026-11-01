//// Hàm: Khối mã được thiết kế để thực hiện một nhiệm vụ cụ thể
// HÀM không có đầu vào, không có giá trị trả về.
// function sayHello() {
//     alert('Xin chào Việt Nam')
// }

// // Gọi hàm
// // sayHello()

// /// Khởi tạo hàm có: tham số đầu vào và có giá trị trả về
// function sum(a, b) {
//     return a + b
// }

// // GỌI HÀM
// console.log(sum(1, 2)); // 3

//////// Viết chương trình kiểm tra số nguyên tố: intput Number / output: true/false
function checkPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(checkPrime(0)); // true

/// in ra các số nguyên tố trong danh sách cho sẵn
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (checkPrime(arr[i])) {
    console.log(arr[i] + " là số nguyên tố");
  }
}

/// Viết hàm kiểm tra năm nhuận: input year/ output: true/fale (nhuận: 2024)
function kiem_tra_nam_nhuan(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }
  if (year % 400 == 0) {
    return true;
  }
  return false;
}

// Một năm thiên văn thực tế: 365,2 ... ngày  chứ không phải 365
// trường hợp 1: (năm chia hết cho 4 nhưng không chia hết cho 100:
// => 1 năm thực dư ra khoảng  0,24 => sau 4 năm tích lũy ta sẽ dư ra gần 1 ngày
// => quy tắc đầu tiên ra đời: cứ 4 năm thì thêm 1 ngày vào tháng 2.

/// TH2: cứ 4 năm thêm 1 ngày, quy ước phần dư mỗi năm là 0,25
// => 0,25 -  0,24222 = 0,007 ngày mỗi năm
// => sau 100 năm, số ngày tính lố -> tích lũy thành gần 1 ngày
// => để sửa sai, các nhà làm lịch quyết định bỏ bớt:
// Một ngày nhuận ở các năm thế kỷ (các năm chia hết cho 100)

// console.log(kiem_tra_nam_nhuan(2000)); //

///// Đối tượng:
let Hieu = {
  firstName: "Hieu",
  lastName: "Nguyen",
  age: 27,
  job: ["Developer", "Research & Development", "Bussines Analyst (ITBA)"],
  qualification: ["MindX Technology School"],
  skill: {
    Ielts: 9.0,
    TOEIC: 990,
    MOS: 999,
    SAT: 1500,
  },

  /// action
  study() {
    console.log("học tập");
  },

  introdution() {
    console.log(
      `My name is NTH - ${Hieu.age} old, I am from ${Hieu.qualification[0]} with title ${Hieu.job}.`,
    );
  },
};

/// Truy vấn thuộc tính
// console.log(Hieu.lastName + " " + Hieu.firstName);


// Cập nhật thuộc tính
Hieu.lastName = "Tòng"
console.log(Hieu.lastName);


// Gọi phương thức
Hieu.study();
Hieu.introdution();
