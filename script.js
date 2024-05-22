var navbartaggle = document.querySelector(".navbartaggle")
var sidenavbarbuttoncontainer = document.querySelector(".sidenavbarbuttoncontainer")

navbartaggle.addEventListener('click', function () {
    sidenavbarbuttoncontainer.style.left = "0%"
})

var sidenavclose = document.querySelector(".sidebarclosebutton")
sidenavclose.addEventListener('click', function () {
    sidenavbarbuttoncontainer.style.left = '-60%'
})

//scroll to most wanted
var mostwantedbtn = document.querySelector("#mostwantedbtn")
var mostwanted = document.getElementById("mostwanted")
mostwantedbtn.addEventListener('click', function () {
    event.preventDefault()
    mostwanted.scrollIntoView({ behavior: "smooth" })
    sidenavbarbuttoncontainer.style.left = '-60%'
})
//scroll to new arrival
var newarrivalbtn = document.getElementById('newarrivalbtn')
var newarrivaltitle = document.querySelector('#newarrivaltitle')
newarrivalbtn.addEventListener('click', function () {
    event.preventDefault()
    newarrivaltitle.scrollIntoView({ behavior: "smooth" })
    sidenavbarbuttoncontainer.style.left = '-60%'

})


