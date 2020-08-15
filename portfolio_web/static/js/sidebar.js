const sidebar = document.getElementById("navigation-sidebar")
const sidebarList = sidebar.getElementsByTagName("li")



for (let i = 0; i < sidebarList.length; i++) {
    console.log(sidebarList[i].style);
}