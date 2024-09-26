
const navBar = document.getElementById("nav-bar");
const content = document.getElementById("content");

navBar.addEventListener("mouseover", () =>
{
    if (window.innerWidth > 800) {
        content.style.paddingLeft  = "200px";
    }
});

navBar.addEventListener("mouseout", () => 
{
    content.style.paddingLeft = "80px";
});