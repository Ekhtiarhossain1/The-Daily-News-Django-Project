
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let logo = document.querySelector(".logo-name")
    let acounts = document.querySelector(".acounts")

    if (window.scrollY > 0) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        logo.style.display = "flex"
        acounts.style.display = "flex"
    } else {
        navbar.style.position = "relative";
        logo.style.display = "none" 
        acounts.style.display = "none"
    }

});
