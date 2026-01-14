const form = document.getElementById("registerForm");
document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username",name);
    window.location.href = "success2.html";
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click",() => {
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active");
});
window.addEventListener("scroll",()=>{
    navMenu.classList.remove("show");
    menuToggle.classList.remove("active");
});
document.addEventListener("DOMContentLoaded",function(){
    const authLink = document.getElementById("authLink");
    if (!authLink) return;
    const username = localStorage.getItem("username");
    if(username){
        authLink.textContent = username;
        authLink.href = "profile.html";
    }else{
        authLink.textContent = "سجل الان";
        authLink.href = "register.html";
    }
});