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

submit.addEventListener('click', function (e) {
   let myobject = complet();
   let reader = new FileReader();
   let image = document.createElement('img')
   image.className ="Galary";
      
      reader.onload = (e) => {
         console.log('fdsdsfsd');
         image.src = e.target.result;
         if (reader.DONE) {
            alert("chargement fini");

         }
        // 
      }
      reader.readAsDataURL(file);
   myobject.galerie=image.src;

   tab.push(myobject);
   console.log(tab);
   let leng = tab.length;

   let objectToAdd = tab[leng-1]
      
      let mycontact = document.createElement('div')
      let formule = document.createElement('div')
      let divimage = document.createElement('div')
      mycontact.className ="mycontact";
      let blank = document.createElement('div')
      let text = document.createElement('div')
      let task = document.createElement('label')
      let task2 = document.createElement('label')
      let task4 = document.createElement('label')
      let text1 = document.createElement('div')
      let task3 = document.createElement('label')
      let text2 = document.createElement('div')
      let task5 = document.createElement('label')
      let task6 = document.createElement('label')


      task.innerHTML = inputname.value;
      task2.innerHTML = inputuser.value;
      task4.innerHTML = inputgroupe.value;
      task3.innerHTML = number.value;
      task5.innerHTML = inputmail.value;
      task5.innerHTML = inputbiographie.value;

      // divimage.appendChild(image)
      formule.appendChild(blank)
      mycontact.appendChild(divimage)
      formule2.appendChild(mycontact)
      mycontact.appendChild(formule)
      divimage.appendChild(image)
      blank.appendChild(text)
      text.appendChild(task)
      text.appendChild(text2)
      text.appendChild(task4)
      blank.appendChild(text1)
      console.log(blank);
      text1.appendChild(task3)
      blank.appendChild(text2)
      text2.appendChild(task5)
      text2.appendChild(task6)
      formule2.appendChild(mycontact)


      let i = document.createElement('i')
      let idelete = document.createElement('i')
});
// add pucture
let inputphoto = document.querySelector('.container-photo1')
let labelphoto = document.querySelector('.labelimg')

inputphoto.addEventListener('dragover', function (even) {
   even.preventDefault();
   even.stopPropagation();
   even.dataTransfer.dropEffect = 'copy';
});

inputphoto.addEventListener('drop', function (event) {
   event.stopPropagation();
   event.preventDefault();
   inputphoto.setAttribute('style', 'borde-color:"";');

   let photoup = document.querySelector('#profil')
   file = event.dataTransfer.files[0];
   let reader = new FileReader();

   reader.onload = (e) => {
      photoup.src = e.target.result;
   }
   reader.readAsDataURL(file);
});

