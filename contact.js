let nom = document.getElementById("nom")
let user_name= document.getElementById("user_name")
let number = document.getElementById("number")
let team = document.getElementById("team")
let email = document.getElementById("email")
let biographie = document.getElementById("biographie")


// team.addEventListener("blur",(e)=>{
//     e.target.style.border ="red solid 2px"
// })

// biographie.addEventListener("blur",(e)=>{
//     e.target.style.border ="red solid 2px"
// });


const nameError = document.getElementById('nameError');

nom.addEventListener('blur', function() {
    if (nom.value.length < 3 || nom.value.length > 50) {
        nom.style.borderColor = "red";
        nameError.textContent = "Veuillez entrer un Pres nom de plus de 3 caractères";
    } else {
        nom.style.borderColor = "";
        nameError.textContent = "";
    }
});

let user_nameError = document.getElementById('user_nameError');
user_name.addEventListener('blur', function() {
    if (user_name.value.length < 3 || user_name.value.length > 50) {
        user_name.style.borderColor = "red";
        user_nameError.textContent = "Veuillez entrer un nom de plus de 3 caractères";
    } else {
        user_name.style.borderColor = "";
        user_nameError.textContent = "";
    }
});
function numberValide(numero) {
    let format = /^(085|089|080|081|099|097)/;
    return format.test(numero);
}

document.getElementById("number").addEventListener("blur", function(){
    let numberOk= this.value;
    if(!numberValide(numberOk)){
        this.style.borderColor = 'red';
        document.getElementById("error-message").textContent = "Please enter a valid phone number.";
    } else {
        document.getElementById("error-message").textContent = "";
    }
});

function bonEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


email.addEventListener('blur', function () {
    if (!bonEmail(this.value)) {
        this.style.borderColor = 'red';
        emailError.textContent = 'Veuillez renseigner une adresse email valide';
    } else {
        this.style.borderColor = '';
        emailError.textContent = '';
    }

});
