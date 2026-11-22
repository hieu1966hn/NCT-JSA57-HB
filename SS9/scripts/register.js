/* ===== CODE CÓ SẴN: CHUYỂN TRANG NẾU ĐÃ ĐĂNG NHẬP ===== */
if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

// Cứ nhắc tới biến form thì hiểu luôn nó là thẻ form
const form = document.querySelector("form");

// Regex có sẵn dùng để kiểm tra độ mạnh mật khẩu
const lowerCaseLetter = /[a-z]/g;
const upperCaseLetter = /[A-Z]/g;
const numbers = /[0-9]/g;

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Ngăn sự kiện reload mặc định của trình duyệt

  /* ===== TODO 1: LẤY DỮ LIỆU TỪ CÁC Ô INPUT =====
   * Gợi ý id trong register.html: "username", "email", "password"
   */
  // .value: lấy ra giá trị bên trong thẻ intput (người dùng nhập)
  // .trim(): loại bỏ khoảng trắng thừa bên trái & phải của giá trị
  // VD: "   hieu  ".trim() => "hieu"
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  /* ===== TODO 2: KIỂM TRA TÍNH HỢP LỆ (VALIDATION) =====
   * - username.length < 6 -> alert("Username must be at least 6 characters")
   * - password.length < 8 -> alert("Password must be at least 8 characters")
   * - !password.match(lowerCaseLetter) -> alert chứa chữ thường
   * - !password.match(upperCaseLetter) -> alert chứa chữ hoa
   * - !password.match(numbers) -> alert chứa chữ số
   */
  if (username.length < 6) {
    alert("Username must be at least 6 characters");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!password.match(lowerCaseLetter)) {
    alert("chứa chữ thường");
  } else if (!password.match(upperCaseLetter)) {
    alert("chứa chữ hoa");
  } else if (!password.match(numbers)) {
    alert("chứa chữ số");
  } else {
    // Khi đăng ký thành công thì phải tiến hành lưu trữ dữ liệu tại đây
    let currentUsers = JSON.parse(localStorage.getItem("users") || []);
    if (currentUsers.some((u) => u.email === email)) {
      // 0 || 1
      alert("Email already registered!");
      return;
    }

    // Nếu tồn tại danh sách users trên trình duyệt rồi -> lấy về thôi
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users")); // là một danh sách users
      users.push({
        email,
        password,
        username,
      });
      localStorage.setItem("users", JSON.stringify(users)); // Ép kiểu giá trị về STRING
    }
    // Nếu đây là tk đầu tiên đăng ký thành công
    else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email,
            password,
            username,
          },
        ]),
      );
      alert("User created successfully, please Login")
    }

    // Thành công tạo tk rồi thì => đưa người dùng đến với trang login.       
    location.href = './login.html'
  }

  /* ===== TODO 3: LƯU TÀI KHOẢN VÀO LOCALSTORAGE =====
   * - Đọc mảng users từ localStorage (key: "users"), nếu chưa có thì mặc định []
   * - Kiểm tra trùng email: currentUsers.some((u) => u.email === email)
   * - Thêm object { email, password, username } vào mảng users và lưu lại bằng JSON.stringify
   * - Thông báo thành công và chuyển hướng sang "./login.html"
   */
});
