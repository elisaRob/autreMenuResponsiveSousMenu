const hamberger=document.querySelector(".hamberger");
const hambergerNav=document.querySelector("nav");
const hambergerList=document.querySelector(".list")
const hambergerLi=document.querySelectorAll(".items");


hamberger.addEventListener("click",menuActive);

function menuActive(){
    hamberger.classList.toggle("active");
    hambergerNav.classList.toggle("activeNav");
    hambergerList.classList.toggle("listActive");
    hambergerLi.forEach(function(li){
        li.classList.toggle("itemsActive");
    })
}