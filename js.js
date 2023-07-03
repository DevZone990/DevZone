// SECCION SCROLL ANIMACION
const boxes = document.querySelectorAll('.hidden')
window.addEventListener('scroll',checkBoxes)
 checkBoxes()
 function checkBoxes(){
    const triggerBottom = window.innerHeight /5*4
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
 }


//nav
        // Obtener elementos del DOM
        const hamburger = document.querySelector('.hamburger');
        const navBar = document.querySelector('.nav-bar');

        // Agregar evento al hacer clic en la hamburguesa
        hamburger.addEventListener('click', () => {
            // Alternar clase 'open' para mostrar/ocultar el menú
            navBar.classList.toggle('active');
        });

        // Agregar eventos a los enlaces del menú
        const navLinks = document.querySelectorAll('.nav-bar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remover clase 'open' para ocultar el menú después de hacer clic en un enlace
                navBar.classList.remove('active');
            });
        });

// section contacto---------------------------------------
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ekh10op';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje Enviado Correctamente!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});

