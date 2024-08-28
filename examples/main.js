const menuBtn = document.getElementById("menu-btn");
const navLinks = documents.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

manuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
})