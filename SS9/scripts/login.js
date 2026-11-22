/* ===== CODE CÓ SẴN: CHUYỂN TRANG NẾU ĐÃ ĐĂNG NHẬP ===== */
if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  /* ===== TODO 1: KIỂM TRA DỮ LIỆU USERS TRONG LOCALSTORAGE =====
   * - Nếu chưa có localStorage.getItem("users") -> alert("No user found")
   */
  if (!localStorage.getItem("users")) {
    alert("No user found");
  } else {
    /* ===== TODO 2: TÌM KIẾM TÀI KHOẢN KHỚP EMAIL & PASSWORD =====
     * - Lấy giá trị input #email và #password (nhớ .trim())
     * - Parse mảng users từ localStorage và dùng users.find(...) để tìm user khớp
     */
    let users = JSON.parse(localStorage.getItem("users"));

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let existingUser = users.find(
      (index) => index.email === email && index.password === password,
    );

    /* ===== TODO 3: XỬ LÝ KẾT QUẢ ĐĂNG NHẬP =====
     * - Nếu tìm thấy existingUser:
     *   + Lưu vào localStorage với key "currentUser"
     *   + Chuyển trang về "./index.html"
     * - Nếu không tìm thấy -> alert("Email or password is incorrect")
     */

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      location.href = "./index.html";
    } else {
      alert("Email or Password is incorrect");
    }
  }
});
