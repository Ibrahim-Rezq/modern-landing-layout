const navClose=document.getElementById("nav-close");
const navOpen=document.getElementById("nav-open");
const nav=document.getElementById("nav-bar");
const navUl=document.querySelector(".nav-items");

navClose.addEventListener('click',navToggle);
navOpen.addEventListener('click',navToggle);


navUl.childNodes.forEach(e=>{
if(e.nodeName=="LI"){
    e.addEventListener('click',navToggle);
    e.addEventListener('click',()=>{
        let elem=document.querySelector(e.firstChild.getAttribute("href"))
        console.log(elem)
    });
}
});

function navToggle() {
    nav.classList.toggle("active");
};