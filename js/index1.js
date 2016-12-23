function home(){
  const auth = localStorage.getItem("auth")
  $.post("http://localhost:3000/v1/signineric/authentication",{
    auth
  })
  .done(function(data,status){
    const Page = document.getElementById("iframePage")
    Page.src = "html/userPage.html"
  })
  .fail(function(data,status){
    const Page = document.getElementById("iframePage")
    Page.src = "html/home.html"
  })
}

function signin(){
  const auth = localStorage.getItem("auth")
  $.post("http://localhost:3000/v1/signineric/authentication",{
    auth
  })
  .done(function(data,status){
    const Page = document.getElementById("iframePage")
    localStorage.removeItem("auth")
    $("#Topbar_signin").val("登入")
    Page.src = "html/home.html"
  })
  .fail(function(data,status){
    const Page = document.getElementById("iframePage")
    Page.src = "html/signin.html"
  })
}

function userPage(){
  const Page = document.getElementById("iframePage")
  Page.src = "html/userPage.html"
}
