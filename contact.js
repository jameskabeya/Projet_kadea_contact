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