const bar = document.querySelector(".fa-bars")
const menu = document.querySelector(".sidebar")
const cross = document.querySelector(".fa-times")

bar.addEventListener("click", () =>{
    menu.classList.toggle("show-sidebar");
})

cross.addEventListener("click",()=>{
    menu.classList.remove("show-sidebar")
})