var entertext = document.querySelector('.search')
var products = document.querySelector(".products")
var elements = products.querySelectorAll('p')

entertext.addEventListener('keyup', function () {
    var enteredtext = event.target.value.toUpperCase()
    for (count = 0; count < elements.length; count = count + 1) {
        if (elements[count].textContent.toUpperCase().indexOf(enteredtext) < 0) {
            elements[count].parentElement.style.display = 'none'
        }
        else {
            elements[count].parentElement.style.display = 'block'
        }
    }
})

//sidebar taggle
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

mostwantedbtn.addEventListener('click', function () {
    event.preventDefault()
    window.location.href = 'index.html#mostwanted'
})

//scroll to new arrival
var newarrivalbtn = document.getElementById('newarrivalbtn')
newarrivalbtn.addEventListener('click', function () {
    event.preventDefault()
    window.location.href = 'index.html#newarrivaltitle'
})