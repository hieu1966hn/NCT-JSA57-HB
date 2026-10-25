// Giới thiệu về: Array, Object & DOM

///// Khởi tạo danh sách
let JSA57 = ["Mai Phong", "Gia Toại", "Nhật Minh"];

//// Dự đoán các phương thức có thể làm được với danh sách là gì?
// Tách Array, Xóa phần tử, thêm phần tử, cập nhật

// Thêm phần tử vào cuối Arr
JSA57.push("Bảo Khánh");
// console.log(JSA57); // hiện tại có 4 phần tử

/// Thêm phần tử vào vị trí cụ thể: vị trí số 2
JSA57.splice(2, 0, "Trang Anh");
// console.log("JSA57: ", JSA57);

//// Array.Splice(): Chèn phần tử, xóa phần tử, cập nhật phàn tử

/// Xóa phần tử ở vị trí thứ 0:
JSA57.splice(0, 1);
// console.log("JSA57: ", JSA57); // ['Gia Toại', 'Trang Anh', 'Nhật Minh', 'Bảo Khánh']

// Cập nhật phần tử ở vị trí số: 1
JSA57.splice(1, 1, "Trang Em");
// console.log("JSA57: ", JSA57); //['Gia Toại', 'Trang Em', 'Nhật Minh', 'Bảo Khánh']

//// Tách danh sách to thành 2 danh sách nhỏ: chọn vị trí cụ thể để tách
const index = 2; // vị trí muốn cắt

let JSA57_1 = JSA57.slice(0, index);
let JSA57_2 = JSA57.slice(index);
// console.log("JSA57_1: ", JSA57_1); // ['Gia Toại', 'Trang Em']
// console.log("JSA57_2: ", JSA57_2); // ['Nhật Minh', 'Bảo Khánh']

////// Duyệt Array: kiểm tra điều kiện
let ds_diem = [50, 49, 48, 47, 52, 51, 55];
/// Yêu cầu của trường: Lọc ra các điểm >= 50đ để nhập học.Các bạn còn lại out

/// Bước 1: Duyệt danh sách
// đếm phần tử trong danh sách bằng cách sử dụng phương thức Array.length()
console.log(ds_diem.length); // 7
let ds_hs_nhap_hoc = []
for (let i = 0; i < ds_diem.length; i++) {
    if (ds_diem[i] >= 50) {
        ds_hs_nhap_hoc.push(ds_diem[i])
    }
}
console.log("ds_hs_nhap_hoc: ", ds_hs_nhap_hoc); // 



