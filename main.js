// ============================== бургер меню ====================
const humburgerMenu = document.querySelector(".header__burgerMenu");
const menu = document.querySelector(".menu");

humburgerMenu.addEventListener("click", function() {
  menu.classList.toggle("menu__hamburger");
  humburgerMenu.classList.toggle("header__burgerMenu-close");
});



// ============================== команда ====================
const accordeonTeam = document.querySelectorAll(".team__accordeon-item");

for (let i = 0; i < accordeonTeam.length; i++){
    
  accordeonTeam[i].addEventListener('click', function(){
      accordeonTeam[i].classList.toggle("team__accordeon-item--active");
      
  });
}



// ============================== меню ====================
const accordeonMenu = document.querySelectorAll(".menu__accordeon-item");

for (let i = 0; i < accordeonMenu.length; i++){
    
  accordeonMenu[i].addEventListener('click', function(){
      event.preventDefault();
      accordeonMenu[i].classList.toggle("menu__accordeon-item--active");
      
  });
}



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

const myForm = document.querySelector("#myForm");
const send = document.querySelector("#send");

send.addEventListener("click", event => {
    event.preventDefault();

    if (validateForm(myForm)) {
      const data = {
        name: myForm.elements.name.value,
        phone: myForm.elements.phone.value,
        comment: myForm.elements.comment.value,
        // email: myForm.elements.email.value
        to: "696amr@mail.ru"
      }
      
      // let rrr = new FormData()
      

      // // rrr.append("name", "efwefw");
      // rrr.name = "effef"
      // rrr.phone = "wqfqf"
      // rrr.comment = "efe"
      // rrr.to = "fefewf"

      // alert(FormData.message);

      // fetch("https://webdev-api.loftschool.com/sendmail/fail", {
      //   method: "POST", 
      //   body: JSON.stringify(data)
      // })

      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "https://webdev-api.loftschool.com/sendmail")
      xhr.send(JSON.stringify(data));
      xhr.addEventListener("load", () => {
          if (xhr.response.status) {
            console.log('заказано')
          }
      });
    }
});

function validateForm(form) {
      let valid = true;

      if (!validateField(form.elements.name)) {
       valid = false;
      }

      if (!validateField(form.elements.phone)) {
        valid = false;
      }

      if (!validateField(form.elements.comment)) {
        valid = false;
      }
      if (!validateField(form.elements.house)) {
        valid = false;
      }
      return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;

    return field.checkValidity();
}