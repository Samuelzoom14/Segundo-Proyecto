/*const nombre = document.getElementById("name")
const mail = document.getElementById("mail")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexMail.test(mail.value)){
        warnings += `El mail no es valido <br>`
        entrar = true
    }
    if(password.value.length <6){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "Enviado"
        window.location = "index.html"
    }
})*/


const loginButton = document.getElementById('login-button');

loginButton.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = document.getElementById('mailModal').value;
  const password = document.getElementById('passwordModal').value;

  if (isValidEmail(email) && isValidPassword(password)) {
    window.location.href = "index.html";
    const adminSection = document.getElementById('adminSection');
    adminSection.style.display = 'block';
  } else {
    console.log("entre")
    alert('Invalid email or password');
  }
});

function isValidEmail(email) {
  return email === "segundoproyecto@gmail.com";
}

function isValidPassword(password) {
  return password === "peliscode";
}
