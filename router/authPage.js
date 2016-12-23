function main() {
  $.get("http://localhost:3000/v1/signuperic/verification",{
    token
  })
  window.location.replace("../index.html")
}
