
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
    } else {
        navbar.style.position = "relative";
    }
});
