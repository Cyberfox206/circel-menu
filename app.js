let toggel = document.getElementById("toggel");
let menu = document.getElementById("menu");

toggel.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggel.classList.toggle("active");
})

