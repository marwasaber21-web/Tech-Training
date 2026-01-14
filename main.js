const filterBtns = document.querySelectorAll(".filter-btn");
const trainers = document.querySelectorAll(".trainer-card");
const trainerCount = document.getElementById("trainers-count")

function filterTrainers(category){
//    نعد كام كارت ظاهر
    let visible = 0;
    trainers.forEach(card => {
        const type= card.getAttribute("data-category");
        if(category === "all"|| type === category){
            card.style.display = "flex";
            visible++;
        }else{
            card.style.display = "none";
        }
    });
    trainerCount.textContent = visible;
}       
filterBtns.forEach(btn =>{
    btn.addEventListener("click",() => {
        filterBtns.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        filterTrainers(btn.dataset.filter);
    });
});
filterTrainers("all");
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