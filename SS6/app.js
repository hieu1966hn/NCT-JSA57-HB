///// Mảng: Array



/// khai báo mảng 
let arr = ["hello", 'hi', 1, 3, 100]

// Đếm số phần tử trong mảng
// console.log(arr.length + 1); // 5 (Number)


// Read: Duyệt danh sách và in ra nó: 
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

/// CRUD với array =>  Create   Read   Update   Delete


// Create: thêm 1 phần tử vào arr => arr.push
arr.push("phở", "quẩy")
arr.push(2000)

// Update: arr.splice => update phở thành 'bún'
arr.splice(5,1, "Bún")
// console.log(arr);

///// Update chuyên sâu: hãy coi arr có khoảng 5000 phần tử. Thay thế "quẩy" thành "giấm"
// Thao tác: tìm theo tên (arr.indexOf) => vị trí => cập nhật. 
console.log(arr.indexOf("quẩy")); // vị trí: 6
arr.splice(6, 1, "giấm")


// Delete: vị trí => delele. Yêu cầu: xóa 'hi'
vi_tri_xoa = arr.indexOf("hi") // 1
arr.splice(vi_tri_xoa, 1)
console.log(`arr sau khi xóa vị trí số ${vi_tri_xoa}`, arr);












