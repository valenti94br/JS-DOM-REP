const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

// Validación
function onSubmit(e) {
  e.preventDefault();

  const userName = document.getElementById("name");
  const email = document.getElementById("email");
  const intereses = document.querySelectorAll('input[type="checkbox"]:checked');
  const suscripcion = document.querySelector('input[type="radio"]:checked');

  const msg = document.getElementById("msg");
  const msg2 = document.getElementById("msg2");

  if (userName.value === "" || email.value === "" || intereses.length === 0 || suscripcion === null) {
    msg.textContent = "Por favor complete todos los campos";
    msg.setAttribute("class", "alert alert-warning");

    setTimeout(function () {
      msg.textContent = "";
      msg.removeAttribute("class");
    }, 3000);
  } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
    msg.textContent = "Por favor ingrese una dirección de correo electrónico válida";
    msg.setAttribute("class", "alert alert-warning");

    setTimeout(function () {
      msg.textContent = "";
      msg.removeAttribute("class");
    }, 3000);
  } else {
    console.log("success");
    msg2.textContent = "¡Gracias por suscribirse!";
    msg2.setAttribute("class", "alert alert-success");

    // Guardar datos en localStorage
    let userArray = JSON.parse(localStorage.getItem("existing")) || [];

    const inputName = userName.value;
    const inputEmail = email.value;
    const inputInterests = [];

    for (let i = 0; i < intereses.length; i++) {
      inputInterests.push(intereses[i].value);
    }

    const inputSubscription = suscripcion.value;

    const userObject = {
      inputName,
      inputEmail,
      inputInterests,
      inputSubscription
    };

    userArray.push(userObject);
    localStorage.setItem("existing", JSON.stringify(userArray));

    // Redirigir a la vista de confirmación
    setTimeout(function () {
      msg2.textContent = "";
      msg2.removeAttribute("class");
      window.location.href = "./suscripciones";
    }, 3000);
  }
};