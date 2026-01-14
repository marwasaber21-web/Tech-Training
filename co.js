document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
        if (!name || !email || !subject || !message) {
            alert("من فضلك أكمل جميع الحقول المطلوبة");
            return;
        }
        alert("تم تسجيلك بنجاح - سيتم التواصل معك قريبا");
        this.reset();
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