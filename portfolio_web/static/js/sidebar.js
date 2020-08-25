// Common used DOM elements
const dropdown = document.getElementById("sidebar-dropdown");
const sidebarBars = document.getElementById("sidebar-bg");
const sidebarBarsIcon = document.getElementById("sidebar-bg-icon");
const header = document.getElementById("header");

// Handle navigation bar burger on click event
function handleOnClick() {
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        sidebarBarsIcon.className = "fas fa-bars";
    } else {
        dropdown.classList.add("show");
        sidebarBarsIcon.className = "fa-lg far fa-times";
    }
}

// Hide header when scroll down.
// Show header when scroll up.
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function(){
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st != lastScrollTop && dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        sidebarBarsIcon.className = "fas fa-bars";
    }
    if (st > lastScrollTop + 50) {
        header.classList.add("header-hidden");
        lastScrollTop = st <= 0 ? 0 : st;
    } 
    else if (st < lastScrollTop - 10) {
        header.classList.remove("header-hidden")
        lastScrollTop = st <= 0 ? 0 : st;
    }
}, false);

// Close the dropdown when click outside of it.
document.addEventListener('click', function(event) {
    const target = event.target;
    const isClickInside = dropdown.contains(target);        

    if (dropdown.classList.contains("show") && target != sidebarBarsIcon && !isClickInside) {
        dropdown.classList.remove("show");
        sidebarBarsIcon.className = "fas fa-bars";
    }
}, false);