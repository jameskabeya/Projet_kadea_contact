<<<<<<< HEAD
tab = [];

const submit = document.querySelector('#btn1');

let inputname = document.querySelector('#name');
let label = document.querySelector('.task');

let inputuser = document.querySelector('#user_name');
let label2 = document.querySelector('.task2');

let nameUser 

let inputgroupe = document.querySelector('#team');
let label4 = document.querySelector('.task4')

let inputnumber = document.querySelector('#number')
let label3 = document.querySelector('.task3')

let inputmail = document.querySelector('#mail')
let label5 = document.querySelector('.task5')

let inputbiographie = document.querySelector('#biographie')
let label6 = document.querySelector('.task6')

let photoup = document.querySelector('#profil')

// let ul = document.querySelector('.listng')

submit.addEventListener('click', function () {
   let i = document.createElement('i')
   let idelete = document.createElement('i')

   // let li = document.createElement('li')
   
   // let listing = document.createAttribute('li')
   // listing.appendChild('div')

   label.innerHTML = inputname.value;
   label2.innerHTML = inputuser.value;
   label4.innerHTML = inputgroupe.value;
   i.setAttribute('class', "fa fa-user-pen")
   idelete.setAttribute('class', "fa fa-trash-can")
   idelete.setAttribute('style','color:red;')

   // fontdelete.setAttribute('class', "fa fa-trash-can-list")
   label4.appendChild(i);
   label4.appendChild(idelete);

   // label4.appendChild(fontdelete);
   label3.innerHTML = number.value;
   label5.innerHTML = inputmail.value;
   label6.innerHTML = inputbiographie.value;

   // ul.appendChild(li)
   // li.appendChild(i)
   // li.appendChild(idelete)
   // // li.appendChild(img)
   

   let image = document.querySelector('img')
   image.src= nameUser;
   photoup.appendChild(image);
   image.setAttribute('style','width:150px;height:150px')
   labelphoto.setAttribute('style', 'display:none;')

});

// add pucture
let inputphoto = document.querySelector('.container-photo1')
let labelphoto = document.querySelector('.labelimg')
let messageup = document.createAttribute('span')

inputphoto.addEventListener('dragover', function (even) {
   even.preventDefault();
   even.stopPropagation();
   even.dataTransfer.dropEffect='copy';
});

inputphoto.addEventListener('drop', function (event) {
   event.stopPropagation();
   event.preventDefault();
   inputphoto.setAttribute('style', 'borde-color:"";');

   let image = document.querySelector('img')
   image.src= event.dataTransfer.files[0].name;
   nameUser = event.dataTransfer.files[0].name;
   inputphoto.appendChild(image);
   image.setAttribute('style','width:25%')
   labelphoto.setAttribute('style', 'display:none;')
   messageup.innerHTML = "veiller ajouter une photo";
   console.log(nameUser);
});


//other to add pucture
=======
let prenom = document.querySelector('#user_name')
let nom = document.querySelector('#name')
let telephone = document.querySelector('#number')
let groupe = document.querySelector('#team')
let email = document.querySelector('#mail')
let bio = document.querySelector('#biographie')
let reset = document.querySelector('#reset')

reset.addEventListener('click',function(){
    prenom.value=""
});

reset.addEventListener('click',function(){
    nom.value=""
});
reset.addEventListener('click',function(){
    telephone.value=""
});
reset.addEventListener('click',function(){
    groupe.value=""
});
reset.addEventListener('click',function(){
    email.value=""
});
reset.addEventListener('click',function(){
    bio.value=""
});
>>>>>>> ad44ec718c7e7ce1ebab8a818cbb058462169217
