//validacion del nombre 
function validarNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();
  
    // Comprobar que el nombre no esté vacío
    if (nombre === '') {
      nombreInput.setCustomValidity('Por favor introduce un nombre');
      return;
    }
  
    // Comprobar que el nombre contenga únicamente letras, espacios y algunos caracteres especiales comunes en nombres
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    if (!regex.test(nombre)) {
      nombreInput.setCustomValidity('El nombre introducido no es válido');
      return;
    }
  
    // Si llegamos hasta aquí, el nombre es válido
    nombreInput.setCustomValidity('');
  }
  
  //validacion de campos del genero
    const form = document.querySelector('form');
    const genderInputs = form.querySelectorAll('input[name="gender"]');
  
    form.addEventListener('submit', (event) => {
      let genderSelected = false;
      genderInputs.forEach((input) => {
        if (input.checked) {
          genderSelected = true;
        }
      });
  
      if (!genderSelected) {
        alert('Por favor seleccione su género.');
        event.preventDefault();
      }
    });
  
  
  //validacion fecha
  function validarFecha() {
    var fechacom = document.getElementById("fechacom").value;
  
    var fecha = new Date(fechacom);
    console.log(fecha)
  
    if (isNaN(fecha)) {
        alert('La fecha ingresada no es válida.');
        return false;
    }
  
    var hoy = new Date();
  
    if (fecha > hoy) {
        alert('La fecha seleccionada es posterior a la fecha actual.');
        return false;
    }
  
    return true;
  }
  
  //validacion de la contraseña
  function validarContraseña(){
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');
    const passwordStrengthMessage = document.getElementById('password-strength-message');
  
    //muestra una barra de lo segura que es la contraseña 
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value.trim();
      let strength = 0;
    
      if (password.length >= 8) {
        strength += 25;
      }
      
      if (password.match(/[a-z]/)) {
        strength += 25;
      }
      
      if (password.match(/[A-Z]/)) {
        strength += 25;
      }
      
      if (password.match(/[0-9]/)) {
        strength += 25;
      }
      
      passwordStrength.value = strength;
      
      if (strength < 50) {
        passwordStrengthMessage.innerHTML = "Fortaleza de contraseña: Débil";
        passwordStrengthMessage.style.color = "red";
      } else if (strength < 75) {
        passwordStrengthMessage.innerHTML = "Fortaleza de contraseña: Media";
        passwordStrengthMessage.style.color = "orange";
      } else {
        passwordStrengthMessage.innerHTML = "Fortaleza de contraseña: Fuerte";
        passwordStrengthMessage.style.color = "green";
      }
    });
  }
  
  const passwordInput = document.querySelector('#password');
  
  form.addEventListener('submit', (event) => {
    const password = passwordInput.value;
  
    if (password.length < 8) {
      event.preventDefault();
      alert('La contraseña debe tener al menos 8 caracteres');
    }
  });