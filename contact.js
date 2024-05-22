var navbartaggle = document.querySelector(".navbartaggle")
var sidenavbarbuttoncontainer = document.querySelector('.sidenavbarbuttoncontainer')
navbartaggle.addEventListener('click', function () {
    sidenavbarbuttoncontainer.style.left = '0%'
})

var sidebarclosebutton = document.querySelector('.sidebarclosebutton')
sidebarclosebutton.addEventListener('click', function () {
    sidenavbarbuttoncontainer.style.left = '-60%'
})

//most wanted
var mostwantedbtn = document.getElementById('mostwantedbtn')
mostwantedbtn.addEventListener('click', function () {
    event.preventDefault()
    window.location = 'index.html#mostwanted'
})

//newarrival
var newarrivalbtn = document.getElementById('newarrivalbtn')
newarrivalbtn.addEventListener('click', function () {
    event.preventDefault()
    window.location = 'index.html#newarrivaltitle'
})