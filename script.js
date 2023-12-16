
    // SİDEBAR JS BAŞLANGIÇ HAKAN
function setActive(element) {
    element.classList.add('active-sidebar');

    
    var links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(function (link) {
        if (link !== element) {
            link.classList.remove('active-sidebar');
        }
    });
}

// SİDEBAR JS SON HAKAN
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

// RESTORAN JS BASLANGIC TOLUNAY

function changeColor(element) {
    // Tüm bağlantılardan 'active' sınıfını kaldır
    var links = document.querySelectorAll('.b');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Tıklanan bağlantıya 'active' sınıfını ekle
    element.classList.add('active');
}

// RESTORAN JS SON TOLUNAY

// SİPARİŞLERİM START KAYRA

function noworder() {
  
document.getElementById("now").classList.add("d-block") 
document.getElementById("now").classList.remove("d-none")
document.getElementById("before").classList.add("d-none")

document.querySelector(".btn1").style.color = "#E91D34"
document.querySelector(".btn1").style.borderBottom = "4px solid #E91D34"

document.querySelector(".btn2").style.color = "#000"
document.querySelector(".btn2").style.borderBottom = "4px solid #f2f2f2"
}

function beforeorder() { 
  document.getElementById("before").classList.add("d-block") 
  document.getElementById("before").classList.remove("d-none") 
  document.getElementById("now").classList.add("d-none") 

document.querySelector(".btn2").style.color = "#E91D34"
document.querySelector(".btn2").style.borderBottom = "4px solid #E91D34"

document.querySelector(".btn1").style.color = "#000"
document.querySelector(".btn1").style.borderBottom = "4px solid #f2f2f2"

}
// SİPARİŞLERİM END KAYRA
