

// ============================== бургер меню ====================
const humburgerMenu = document.querySelector(".header__burgerMenu");
const menu = document.querySelector(".menu");

humburgerMenu.addEventListener("click", function() {
  menu.classList.toggle("menu__hamburger");
  humburgerMenu.classList.toggle("header__burgerMenu-close");
});



// ============================== команда ====================

const accordeonTeam = document.querySelectorAll(".team__accordeon-item");

accordeonTeam.forEach(accordeonTeam => {
  accordeonTeam.addEventListener('click', (event) => {
      event.preventDefault()
      const accordeon = accordeonTeam

      if (accordeon.classList.contains('team__accordeon-item--active')) {
        accordeon.classList.remove('team__accordeon-item--active')
      } else {
        const accordeonTeamActive = document.querySelector('.team__accordeon-item--active')
        if (accordeonTeamActive && !accordeon.isEqualNode(accordeonTeamActive)) {
          accordeonTeamActive.classList.remove('team__accordeon-item--active') 
        }
        accordeon.classList.add('team__accordeon-item--active')
      }
    })
  })


// ============================== меню ====================
const accordeonMenu = document.querySelectorAll(".menu__accordeon-item");

accordeonMenu.forEach(accordeonMenu => {
  accordeonMenu.addEventListener('click', (event) => {
      event.preventDefault()
      const accordeon = accordeonMenu

      if (accordeon.classList.contains('menu__accordeon-item--active')) {
        accordeon.classList.remove('menu__accordeon-item--active')
      } else {
        const accordeonMenuActive = document.querySelector('.menu__accordeon-item--active')
        if (accordeonMenuActive && !accordeon.isEqualNode(accordeonMenuActive)) {
          accordeonMenuActive.classList.remove('menu__accordeon-item--active') 
        }
        accordeon.classList.add('menu__accordeon-item--active')
      }
    })
  })



// ============================== слайдер ====================
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");


right.addEventListener("click", function(e) {
  loop("right", e);
});
 
left.addEventListener("click", function(e) {
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.append(items.firstElementChild);
  } else {
    items.prepend(items.lastElementChild);
  }
}

// ============================== форма ====================

const myForm = document.getElementById('myForm');
const send = document.querySelector("#send");

const modal = document.querySelector(".form__modal");
const madalText = document.querySelector(".form__modal-text")
const close = document.querySelector(".form__modal-close");

close.addEventListener("click", toggleModal);

modal.addEventListener("click", function(e){
  if (e.target === modal) {
    close.click();
  }
})

function toggleModal() {
  modal.classList.toggle("form__modal--active");
  document.body.classList.toggle("hidden");
}

myForm.onsubmit = function(event) {
  event.preventDefault(); // скидываешь дефолтное поведение формы
  const formData = new FormData(myForm); // создаешь formData
  formData.append("to", "name@mail.ru"); // добавление email
  const request = new XMLHttpRequest(); // создание запроса
  request.open("POST", 'https://webdev-api.loftschool.com/sendmail'); // создание метода и пути
  request.send(formData); // отправка данных


  request.addEventListener('load', function() { // подписка на событие load
    const response = JSON.parse(request.response);
    madalText.innerHTML = response.message;
    toggleModal();
    
  });
}