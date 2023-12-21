
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

//! CUZDAN BASLANGIC TOLUNAY

function setActive(button) {
    var buttons = document.querySelectorAll('.parayukleme');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');

    var masterpass = document.querySelector('.masterpassbtn');
    masterpass.classList.add('active');


    var paraDiv = button.querySelector('.para');
    var inputField = document.querySelector('.form-control');

    if (inputField) {
        inputField.value = paraDiv.textContent;
    }
    
}

function onInputChange() {
  var input = document.querySelector('.form-control');
  var masterpassbtn = document.querySelector('.masterpassbtn');
  var buttons = document.querySelectorAll('.parayukleme');

  if (input && masterpassbtn) {
    var trimmedValue = input.value.trim();

    if (trimmedValue === "") {
      masterpassbtn.classList.remove('active');
      masterpassbtn.disabled = true;
      
      buttons.forEach(function (btn) {
        var buttonValue = btn.querySelector('.para').textContent.trim();
        btn.classList.toggle('active', trimmedValue === buttonValue);
      });
    } else {
      masterpassbtn.classList.add('active');
      masterpassbtn.disabled = false;
    }
  }
}
document.querySelector('.form-control').addEventListener('input', onInputChange);

onInputChange();

// !CUZDAN SON TOLUNAY

// mali telefon numarası alanı 
const ulkeler = [
  {
    isim: "Türkiye",
    telefon_kodu: "+90",
    ulke_kodu: "TR",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png"
  },
  {
    isim: "Almanya",
    telefon_kodu: "+49",
    ulke_kodu: "DE",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
  },
  {
    isim: "Amerika",
    telefon_kodu: "+1",
    ulke_kodu: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/US_flag_49_stars.svg/2560px-US_flag_49_stars.svg.png"
  },
];

  const select = document.getElementById('select');
  const input = document.getElementById('input')
  const img = document.getElementById('img')
  const options = document.querySelectorAll('option')

select.addEventListener('change',() => {
  const selected_country_code = select.value
  const selected_country = ulkeler.find(ulke => ulke.ulke_kodu == selected_country_code)
  console.log(selected_country)
  input.value = selected_country.telefon_kodu
  img.src = selected_country.flag
  select.value = ""
  if(img.parentElement.classList.contains('d-none')){
    img.parentElement.classList.remove('d-none')
    img.parentElement.classList.add('d-block')
  }


  input.addEventListener('keyup', (event)=> {
    console.log(event.target.value)
  })
})
// mali telefon numarası alanı bitis

//burak kopyalama kısmı baş 

    var guncellenmisMetin = '';
    
            function guncelle() {
                // Input alanının güncel değerini al
                guncellenmisMetin = document.getElementById("codef").textContent;
            }
    
            function kopyala() {
                // Kopyala
                navigator.clipboard.writeText(aguncellenmisMetin)
                    // .then(function() {
                    //     // Kullanıcıya bildirim göster
                    //     alert("Metin kopyalandı: " + guncellenmisMetin);
                    // })
                    // .catch(function(err) {
                    //     console.error('Kopyalama işlemi başarısız oldu: ', err);
                    // });
            }
//burak kopyala kısmı son
