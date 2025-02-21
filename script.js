function login()
{
  let u = username.value
  let p = pass.value
  if (u=="m" && p=="1")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
  else
  {
    document.getElementById("retry").innerText="Tên đăng nhập hoặc Mật khẩu chưa đúng. Vui lòng thử lại."
  }
}
