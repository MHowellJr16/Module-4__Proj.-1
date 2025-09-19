// template_19t3sos
// service_xtldnql
// zBtD0yASn6CV5-gFr

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor; 
    const y = event.clientY * scaleFactor;
    const scaleFactor = 1 / 20
    console.log(x, y)
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * 0.01 * boolInt}px, ${y * 0.01 * boolInt}px) rotate(${x * 0.05 * boolInt}deg)`
    }
}

let  conntrastToggle = false
function toggleContrast() {
    conntrastToggle = !conntrastToggle
    if (conntrastToggle) {
        return document.body.classList += " dark-theme"
    }
    document.body.classList.remove("dark-theme")
}

function contact(event) {
event.preventDefault()
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible" 
    emailjs
        .sendForm(
            'service_xtldnql',
            'template_19t3sos',
            event.target,
            'zBtD0yASn6CV5-gFr'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly at"
        )
    })
    }
let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}