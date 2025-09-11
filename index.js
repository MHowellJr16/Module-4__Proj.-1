// template_19t3sos
// service_xtldnql
// zBtD0yASn6CV5-gFr
function contact(event) {
   /* event.preventDefault();
    emailjs
        .sendForm(
            'service_xtldnql',
            'template_19t3sos',
            event.target,
            'zBtD0yASn6CV5-gFr'
        ).then(() => {
            console.log("SUCCESS!");
        }
        )
    */ 
   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
   loading.classList += " modal__overlay--visible" 
   setTimeout(() => {
     loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
     console.log("SUCCESS! 1")
    }, 1000);
}