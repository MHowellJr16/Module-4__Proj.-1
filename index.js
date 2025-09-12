// template_19t3sos
// service_xtldnql
// zBtD0yASn6CV5-gFr
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

function toggleModal() {
    document.body.classList += " modal--open"
}