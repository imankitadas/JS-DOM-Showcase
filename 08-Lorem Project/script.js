const menuIcon = document.querySelector("#menuIcon1")
const navlist = document.querySelector("#navItem");
const navbar = document.querySelector("#navbar");

menuIcon.addEventListener("click", ()=>{ 
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('.h-nav-resp');
})
