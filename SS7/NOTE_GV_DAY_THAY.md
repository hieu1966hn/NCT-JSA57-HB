# HƯỚNG DẪN GIẢNG DẠY BUỔI 7 (DÀNH CHO GV DẠY THAY)
**Lớp:** NCT-JSA57-HB | **Bộ môn:** Web Developer - Advanced (JSA)  
**Thời lượng:** 120 phút | **Giáo viên phụ trách:** Nguyễn Thế Hiệu (nghỉ phép buổi 7)

---

## ⚠️ LƯU Ý QUAN TRỌNG VỀ TIẾN TRÌNH LỚP HỌC
* **Tiến trình thực tế:** Buổi 6 vừa rồi, lớp mới học xong Mảng (Array), Hàm (Function), Đối tượng (Object) và mới chỉ làm quen DOM cơ bản (`getElementById`, thay đổi `innerHTML`, đổi màu `style.color`).
* **Học viên CHƯA HỌC:** Thao tác Form DOM (`input.value`, `e.preventDefault()`), `localStorage`, Git/GitHub và chưa khởi tạo dự án MindX Cinema.
* **YÊU CẦU ĐỐI VỚI GV DẠY THAY:**  
  👉 **KHÔNG dạy theo giáo án Buổi 7 của Teaching Guide (về gọi API / Trang chi tiết phim).**  
  👉 **BẮT BUỘC dạy theo nội dung BÀI 6 TRONG TEACHING GUIDE (kết hợp bù phần Form & LocalStorage của Bài 5).**

---

## ⏱️ KỊCH BẢN GIẢNG DẠY 120 PHÚT

### 1. Phần 1: Ôn tập & Bù kiến thức Form + LocalStorage (30 - 35 phút)
* **DOM với Form:**
  * Thẻ `<form>`, các ô `<input id="...">`, nút `<button type="submit">`.
  * Bắt sự kiện submit: `form.addEventListener('submit', function(e) { e.preventDefault(); ... })`.
  * Lấy dữ liệu người dùng nhập bằng thuộc tính `.value` (kèm `.trim()`).
* **Lưu trữ dữ liệu với LocalStorage:**
  * Giới thiệu cơ chế lưu trữ ở trình duyệt: `localStorage.setItem(key, value)`, `localStorage.getItem(key)`.
  * Cơ chế chuyển đổi dữ liệu phức tạp:
    * `JSON.stringify(data)`: Chuyển Object/Array thành chuỗi JSON để lưu vào localStorage.
    * `JSON.parse(data)`: Chuyển chuỗi JSON từ localStorage về lại Object/Array trong JavaScript.

---

### 2. Phần 2: Khởi động Dự án MindX Cinema (60 - 70 phút)
* **Giới thiệu dự án MindX Cinema:**
  * Web xem phim thực tế (Real-world project) có đăng ký, đăng nhập, danh sách phim và xem phim.
  * Cấu trúc thư mục dự án gồm: `index.html` (trang chủ), `login.html`, `register.html`, `styles.css`, `app.js`.
* **Thực hành lập trình trang Đăng ký (`register.html`):**
  * Hướng dẫn học sinh dựng giao diện form đăng ký (Username, Email, Password).
  * Viết JS: Lấy danh sách users từ `localStorage` (hoặc mảng rỗng `[]`), kiểm tra trùng username, push tài khoản mới và lưu lại vào `localStorage`.
* **Thực hành lập trình trang Đăng nhập (`login.html`):**
  * Dựng giao diện form đăng nhập.
  * Viết JS: Lấy danh sách users từ `localStorage`, dùng hàm tìm kiếm (`find`) so khớp username & password.
  * Nếu đúng -> Lưu `currentUser` vào `localStorage` và chuyển hướng sang `index.html`. Nếu sai -> `alert("Sai tài khoản hoặc mật khẩu!")`.
* *(Nếu còn thời gian):* Bắt đầu dựng khung Header & Banner cho `index.html` (Trang chủ).

---

### 3. Phần 3: Làm quen Git/GitHub hoặc Dặn dò (15 - 20 phút)
* Hướng dẫn học sinh đăng ký tài khoản GitHub (nếu chưa có).
* Tạo repository cá nhân và hướng dẫn bật **GitHub Pages** (hoặc hướng dẫn đẩy code lên repo).
* Tổng kết bài học và giao bài tập hoàn thiện CSS giao diện trang Login/Register ở nhà.

---

## 👥 ĐẶC ĐIỂM HỌC VIÊN CẦN LƯU Ý
*(Trích xuất từ kết quả chấm Checkpoint 1 của lớp)*
* **Nhóm học sinh tiếp thu nhanh (*Trang Anh, Mai Phong, Gia Toại*):** Có thể giao thêm thử thách làm giao diện đẹp hơn (hiệu ứng hover, validate mật khẩu > 6 ký tự).
* **Học sinh cần kèm cặp thêm (*Quang Minh*):** Thầy/cô lưu ý đứng gần hỗ trợ bạn khi gõ code JavaScript thao tác với DOM và Form để bạn tự tin hơn.

---

## 📁 TÀI LIỆU THAM KHẢO
* **Code mẫu R&D MindX:** `05. [Coding- JSA] Sample/Sample Project/SS6`
* **Teaching Guide:** `01. [Coding- JSA] Teaching Guide/[JSA - TG] Buổi 6_MindX Cinema.docx`

