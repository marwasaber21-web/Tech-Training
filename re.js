document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const registerForm =document.getElementById("registerForm");
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pay = document.getElementById("payment").value;
         if (!name || !email || !phone || !pay) {
            alert("من فضلك أكمل جميع الحقول المطلوبة");
            return;
        }
        registerForm.addEventListener("submit",function(e){
          e.preventDefault();
          window.location.href= "success.html";
        });
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
        authLink.href = "Registration.html";
    }
});