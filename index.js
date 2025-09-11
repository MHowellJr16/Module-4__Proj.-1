// template_19t3sos
// service_xtldnql
// zBtD0yASn6CV5-gFr
function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'sevice_xtldnql',
            'template_19t3sos',
            event.target,
            'zBtD0yASn6CV5-gFr'
        ).then(() => {
            console.log("SUCCESS!");
        }
        )

}