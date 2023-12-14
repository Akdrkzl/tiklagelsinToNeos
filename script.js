
// footer kodları başlangıcı mali 

//! Accordion Menu
let accordionHeader = document.querySelectorAll('.accordionHeader');
let accordionBody = document.querySelectorAll('.accordionBody');


for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', () => {
  
        if (accordionBody[i].classList.contains('d-none')) {
            accordionBody[i].classList.replace('d-none', 'd-block');
            accordionHeader[i].querySelector('i').classList.replace('fa-angle-down', 'fa-angle-up');
        } else {
            accordionBody[i].classList.replace('d-block', 'd-none');
            accordionHeader[i].querySelector('i').classList.replace('fa-angle-up', 'fa-angle-down');
        }
    });
}

// footer kodları bitişi mali 
