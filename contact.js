let tab = [];

const submit = document.querySelector('#btn1');
let inputname = document.querySelector('#name');
let inputuser = document.querySelector('#user_name');
let inputgroupe = document.querySelector('#team');
let number = document.querySelector('#number')
let inputmail = document.querySelector('#mail')
let inputbiographie = document.querySelector('#biographie')

function complet() {
   myobject = {
      pastname: inputname.value,
      name: inputuser.value,
      team: inputgroupe.value,
      number: number.value,
      mail: inputmail.value,
      Bio: inputbiographie.value,
   }
   return myobject;
}
let formule2 = document.querySelector('.formule2')
let image;
submit.addEventListener('click', function (e) {
   
   let myobject = complet();
   let reader = new FileReader();
    image = document.createElement('img')
   image.className = "Galary";

   reader.onload = (e) => {
      console.log('fdsdsfsd');
      image.src = e.target.result;
      if (reader.DONE) {
         alert("chargement fini");

      }
      // 
   }
   validateForm();
   reader.readAsDataURL(file);
   myobject.galerie = image.src;

   tab.push(myobject);
   console.log(tab);
   let leng = tab.length;

   let objectToAdd = tab[leng - 1]

   let mycontact = document.createElement('div')
   let formule = document.createElement('div')
   let divimage = document.createElement('div')
   mycontact.className = "mycontact";
   let blank = document.createElement('div')
   let text = document.createElement('div')
   text.className = "divNames";
   let task = document.createElement('label')
   let task2 = document.createElement('label')
   let task4 = document.createElement('label')
   task4.className = "fontawasome";
   let text1 = document.createElement('div')
   let task3 = document.createElement('label')
   text1.className = "numeros";
   let text2 = document.createElement('div')
   // text2.className = "mailbio";
   let task5 = document.createElement('label')
   let infodiv = document.createElement('div')
   let task6 = document.createElement('label')
   let font_delete = document.createElement('div')
   font_delete.className = "font_delete";

   task.innerHTML = inputname.value;
   task2.innerHTML = inputuser.value;
   task4.innerHTML = inputgroupe.value;
   task3.innerHTML = number.value;
   task5.innerHTML = inputmail.value;
   task6.innerHTML = inputbiographie.value;

   // divimage.appendChild(image)
   mycontact.appendChild(divimage)
   divimage.appendChild(image)
   blank.appendChild(text)
   text.appendChild(task)
   text.appendChild(task2)
   text.appendChild(task4)
   // task4.appendChild(i)
   // console.log(blank);
   blank.appendChild(text1)
   text1.appendChild(task3)
   blank.appendChild(text2)
   text2.appendChild(task5)
   text2.appendChild(infodiv)
   infodiv.appendChild(task6)
   formule.appendChild(blank)
   mycontact.appendChild(formule)
   formule2.appendChild(mycontact)
   mycontact.appendChild(font_delete)
   let i = document.createElement('i')
   i.setAttribute('class', "fa fa-user-pen")
   let idelete = document.createElement('a')
   idelete.setAttribute('class', "fa fa-trash-o")
   idelete.setAttribute('style', 'color:red;')
   font_delete.appendChild(i)
   font_delete.appendChild(idelete);
   // font_delete.appendChild(i)

   let btn_delete = document.createElement('button') 
   idelete.addEventListener('click', function () {
      mycontact.parentNode.removeChild(mycontact);
    })
});
// add pucture
let inputphoto = document.querySelector('.container-photo1')
let labelphoto = document.querySelector('.labelimg')

inputphoto.addEventListener('dragover', function (even) {
   even.preventDefault();
   even.stopPropagation();
   even.dataTransfer.dropEffect = 'copy';
});
let photoup;
inputphoto.addEventListener('drop', function (event) {
   event.stopPropagation();
   event.preventDefault();
   inputphoto.setAttribute('style', 'borde-color:"";');

    photoup = document.querySelector('#profil')
   file = event.dataTransfer.files[0];
   let reader = new FileReader();

   reader.onload = (e) => {
      photoup.src = e.target.result;
   }
   reader.readAsDataURL(file);
});
///////////////////////////
let nom = document.querySelector('#name')
let user_name = document.querySelector('#user_name')
let numbers = document.querySelector('#number')
let team = document.querySelector('#team')
let email = document.querySelector('#mail')
let biographie = document.querySelector('#biographie')
const nameError = document.getElementById('nameError');

nom.addEventListener('blur', function () {
   if (nom.value.length < 3 || nom.value.length > 50) {
      nom.style.borderColor = "red";
      nameError.textContent = "Veuillez entrer un Pres nom de plus de 3 caractères";
   } else {
      nom.style.borderColor = "";
      nameError.textContent = "";
   }
});
let user_nameError = document.getElementById('user_nameError');
user_name.addEventListener('blur', function () {
   if (user_name.value.length < 3 || user_name.value.length > 50) {
      user_name.style.borderColor = "red";
      user_nameError.textContent = "Veuillez entrer un nom de plus de 3 caractères";
   } else {
      user_name.style.borderColor = "";
      user_nameError.textContent = "";
   }
});
function numbersValide(numero) {
   let format = /^(085|084|089|080|081|099|097|090)/;
   return format.test(numero);
}
document.getElementById("number").addEventListener("blur", function () {
   let numberOk = this.value;
   if (!numbersValide(numberOk)) {
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
//about delete button reinit
let prenom = document.querySelector('#name')
let name1 = document.querySelector('#user_name')
let telephone = document.querySelector('#number')
let groupe = document.querySelector('#team')
let E_mail = document.querySelector('#mail')
let bio = document.querySelector('#biographie')
let splitimage = document.querySelector('#profil')
let renit = document.querySelector('#reset')

renit.addEventListener('click',function(){
    prenom.value="";
});
renit.addEventListener('click',function(){
   name1.value="";
});
renit.addEventListener('click',function(){
    telephone.value="";
});
renit.addEventListener('click',function(){
    groupe.value="";
});
renit.addEventListener('click',function(){
   E_mail.value="";
});
renit.addEventListener('click',function(){
    bio.value="";
});
renit.addEventListener('click',function(){
   splitimage.value="";
});
function validateForm() {
   if (prenom.value == "" && name1.value == "" && telephone.value =="" && groupe.value == "" && E_mail.value == ""  && image.src=="") {
     alert("Tous les champs doivent être remplis");
   }
  }