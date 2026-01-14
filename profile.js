document.getElementById("userName").innerText="ملك احمد";
document.getElementById("userEmail").innerText="malak@gmail.com";
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("username");
    window.location.href = "index.html";
})
// function logoutBtn(){
    // alert("تم تسجيل الخروج");
    // window.location.href = "index.html";
// }
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click",() => {
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active");
    ;
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