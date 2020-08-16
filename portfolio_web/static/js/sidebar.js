// handle navigation bar burger on click event
function handleOnClick() {
    const dropdown = document.getElementById("sidebar-dropdown");
    const sidebarBarsIcon = document.getElementById("sidebar-bg-icon");
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show")
        sidebarBarsIcon.className = "fas fa-bars"
    } else {
        dropdown.classList.add("show");
        sidebarBarsIcon.className = "fa-lg far fa-times"
    }
}

