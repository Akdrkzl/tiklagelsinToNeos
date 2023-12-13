
// footer kodları başlangıcı mali 

//! Accordion Menu

let accordionHeader = document.querySelectorAll('.accordionHeader');
let accordionBody = document.querySelectorAll('.accordionBody');

for(let i=0;i<accordionHeader.length;i++){
    accordionHeader[i].addEventListener('click',()=>{
        if(accordionBody[i].classList.contains('d-none')){
            accordionBody[i].classList.replace('d-none','d-block');
        }else{
            accordionBody[i].classList.replace('d-block','d-none');
        }
    })
}
// footer kodları bitişi mali 
