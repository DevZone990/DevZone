const seccionesOcultas = document.querySelectorAll('.mob');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    })
})
seccionesOcultas.forEach((seccion)=>observer.observe(seccion)); 




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
        Window.onscroll = ()=>{
            navbar.classList.remove('active');
        }
        
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
//---------------COTIZAR MAIL-------------------------//
const button = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_xcf8tvr';
   const templateID = 'template_gsi4g8n';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje Enviado Correctamente!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});