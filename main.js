@@ -0,0 +1,46 @@
// alterear os estilos da barra de navegação na rolagem

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// window.addEventListener('scroll', () => {
//     document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0)
// })

// Mostrar/Esconder perguntas frequentes
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Trocar o ícone quando abrir o card
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})


// Mostrar/ Esconder MENU DROPDOW
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Fechar o menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav);