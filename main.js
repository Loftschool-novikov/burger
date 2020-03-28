// ============================== бургер меню ====================
const humburgerMenu = document.querySelector(".header__burgerMenu");
const menu = document.querySelector(".menu");

humburgerMenu.addEventListener("click", function() {
  menu.classList.toggle("menu__hamburger");
  humburgerMenu.classList.toggle("header__burgerMenu-close");
});



// ============================== команда ====================
// const accordeonTeam = document.querySelectorAll(".team__accordeon-item");
// for (let i = 0; i < accordeonTeam.length; i++) {
//   accordeonTeam[i].classList.remove("team__accordeon-item--active");
//   accordeonTeam[i].addEventListener('click', function() {
//     for (let i = 0; i < accordeonTeam.length; i++) {                      //
//       accordeonTeam[i].classList.remove("team__accordeon-item--active"); //удаляет актиынй класс
//   }                                                                     //
//       accordeonTeam[i].classList.toggle("team__accordeon-item--active");
//   });
// }

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
// for (let i = 0; i < accordeonMenu.length; i++) {
//   accordeonMenu[i].addEventListener('click', function() {
//     for (let i = 0; i < accordeonMenu.length; i++) {                      //
//       accordeonMenu[i].classList.remove("menu__accordeon-item--active");
//       event.preventDefault();
//     }
//       accordeonMenu[i].classList.toggle("menu__accordeon-item--active");
      
//   });
// }



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
    // if (response.status) { 
		// 			console.log("заказано")
    // } else {
    //     console.log("не заказано")
    // }
  });
}





  //     event.preventDefault();

//     if (true) {
//       const data = {
//         name: myForm.elements.name.value,
//         phone: myForm.elements.phone.value,
//         comment: myForm.elements.comment.value,
//         // email: myForm.elements.email.value
//         to: "696amr@mail.ru"
//       };
      
//       let rrr = new FormData(myForm)
      

//       rrr.append("name", "efwefw");
//       rrr.append("phone", "efwefw");
//       rrr.append("comment", "efwefw");
//       rrr.append("to", "efwefw");
//       // rrr.name = "effef"
//       // rrr.phone = "wqfqf"
//       // rrr.comment = "efe"
//       // rrr.to = "fefewf"

//       // alert(FormData.message);

//       // fetch("https://webdev-api.loftschool.com/sendmail/fail", {
//       //   method: "POST", 
//       //   body: JSON.stringify(data)
//       // })

//       const xhr = new XMLHttpRequest();
//       xhr.responseType = "json";
//       xhr.open("POST", "https://webdev-api.loftschool.com/sendmail")
//       xhr.send(rrr);
//       xhr.addEventListener("load", () => {
//           if (xhr.response.status) {
//             console.log('заказано')
//           }
//       });
//     }
// });



// function validateForm(form) {
//       let valid = true;

//       if (!validateField(form.elements.name)) {
//        valid = false;
//       }

//       if (!validateField(form.elements.phone)) {
//         valid = false;
//       }

//       if (!validateField(form.elements.comment)) {
//         valid = false;
//       }
//       if (!validateField(form.elements.house)) {
//         valid = false;
//       }
//       return valid;
// }

// function validateField(field) {
//     field.nextElementSibling.textContent = field.validationMessage;

//     return field.checkValidity();
// }

// ============================== модальное меню ====================
// const modal = document.getElementById("myModal");
// const modalCont = document.getElementsByClassName('form__modal-content');
// const btn = document.getElementById("send");
// const close = document.getElementsByClassName("form__modal-close");

// btn.addEventListener('click' , function () {
//   modalCont.style.display = 'block';
//   modal.style.display = 'block';
// });

// setTimeout(function () {
//   modalCont.style.display = 'block';
//   modal.style.display = 'block';
// }, 800);

// close.addEventListener('click' , function () {
//   modalCont.style.display = '';
//   modal.style.display = '';
// });

// modal.addEventListener('click' , function () {
//   modal.style.display = '';
//   modalCont.style.display = '';
// });