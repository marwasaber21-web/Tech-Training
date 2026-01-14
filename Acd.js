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
// let username = localStorage.getItem("username");
// const heroSubtitle = document.getElementById("hero-Subtitle");
// const loginBtn = document.getElementById("login-btn");

// if(username){
    // heroTitle.textContent =`${username}مرحبا `;
    // heroSubtitle.textContent = "استمتع بالكورسات المخصصة لك";
    // loginBtn.style.display = "none"
// }
// window.addEventListener("scroll",()=>{
    // const header = document.querySelector(".site-header");
    // if(window.scrollY > 50){/
        // header.style.background = "rgba(0,0,0, 0.3)";
    // }
// });
// const navbar = document.getElementById("navbar");
// document.addEventListener("DOMContentLoaded",() => {
    // const header = document.querySelector("header");
        // window.addEventListener("scroll",()=>{
            // if(window.scrollY > 50){
            //   navbar.classList.add("scrolled")
            // }else{
        //    navbar.classList.remove("scrolled")
        //    }
    // });
// });
const card = document.querySelectorAll(".card");
function cardonScroll (){
    card.forEach(card => {
        const windowHeight = window.innerHeight;
        const elementTop = card.getBoundingClientRect().top;
        const cardPoint = 120;
        if(elementTop < windowHeight - cardPoint){
            card.classList.add("active")
        }
    });
}
window.addEventListener("scroll",cardonScroll);