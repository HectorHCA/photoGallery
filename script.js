



function volverPaginaAnterior() {
  window.history.back();
}





function openOverlayH(imageUrl) {

  console.log("abriendo foto HORIZONTAL");
  var overlay = document.getElementById('overlayH');
  var overlayImage = document.getElementById('overlayImageH');
  var closeButton = document.getElementById('closeButton');

  overlayImage.onload = function () {  // agregar evento load a la imagen del overlay
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  overlayImage.src = imageUrl;

  closeButton.onclick = function () {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  overlay.onclick = function () {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}



function openOverlayV(imageUrl) {
  console.log("abriendo foto VERTICAL");
  var overlay = document.getElementById('overlayV');
  var overlayImage = document.getElementById('overlayImageV');
  var closeButton = document.getElementById('closeButton');


  overlayImage.onload = function () {  // agregar evento load a la imagen del overlay
    overlay.style.display = 'block';
    /*
    document.body.style.overflow = 'hidden';
*/

  }

  overlayImage.src = imageUrl;

  closeButton.onclick = function () {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  overlay.onclick = function () {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}






function abrirSubmenu() {
  var submenu = document.getElementById('sub');
  var fotos = document.getElementById('fotos');
  var submenuHeight = submenu.offsetHeight;

  submenu.classList.add('visible'); // Agrega la clase "visible" para mostrar el submenú
  fotos.style.transform = "translateY(45px)"; // Desplaza el .row hacia abajo
}

function cerrarSubMenu() {
  var submenu = document.getElementById('sub');
  var fotos = document.getElementById('fotos');

  ocultarSubmenu();


  submenu.classList.remove('visible'); // Quita la clase "visible" para ocultar el submenú
  fotos.style.transform = "translateY(0)"; // Reinicia la posición del .row

}


function toggleSubmenu() {
  var submenu = document.getElementById('sub');
  var fotos = document.getElementById('fotos');

  if (submenu.classList.contains('visible')) {

    cerrarSubMenu();
    submenu.classList.remove('visible'); // Cierra el submenú si está abierto
    fotos.style.transform = "translateY(0)"; // Reinicia la posición del .row


  } else {



    bajarSubmenu();
    submenu.classList.add('visible'); // Abre el submenú si está cerrado
    fotos.style.transform = "translateY(45px)"; // Desplaza el .row hacia abajo








  }
}




function bajarSubmenu() {



  let submenu = document.getElementById('sub');

  submenu.style.transition = 'top 1s';
  submenu.style.visibility = 'visible';
  submenu.style.animation = 'desplegar 1s ease forwards';
  submenu.style.top = '20px';

}


function ocultarSubmenu() {
  var submenu = document.getElementById('sub');


  if (submenu.style.visibility == 'visible') {
    submenu.style.transition = 'top 1s';
    submenu.style.animation = 'replegar 1s ease forwards';
    submenu.style.top = '-50px';


  }





}








function abrirSubmenuSocial() {

  let social = document.getElementById("submenuSocial");
  social.style.display = "block";




}


const cerrarSubmenuSocial = () => {


  let social = document.getElementById("submenuSocial");
  social.style.display = "none";









}



function irArriba() {


  window.scrollTo({ top: 0, behavior: 'smooth' });


}


/*
$('.social').click(function () {
    $('.submenu').toggleClass('open');
    $('.row').toggleClass('open');
});
*/




function siguiente() {


  var image = document.getElementById('fotoActual');
  var rutaActual = image.src;
  var numeroActual = parseInt(rutaActual.split('/').pop().split('.')[0]); // Extraemos el número actual de la ruta
  var nuevaRuta = rutaActual.replace(numeroActual + '.jpg', (numeroActual + 1) + '.jpg'); // Construimos la nueva ruta sumando 1 al número actual
  image.src = nuevaRuta;




}

function anterior() {
  var image = document.getElementById('fotoActual');
  var rutaActual = image.src;
  var numeroActual = parseInt(rutaActual.split('/').pop().split('.')[0]); // Extraemos el número actual de la ruta

  if (numeroActual <= 1) {
    return; // Evitamos que el número actual sea menor o igual a 1
  }

  var nuevaRuta = rutaActual.replace(numeroActual + '.jpg', (numeroActual - 1) + '.jpg'); // Construimos la nueva ruta restando 1 al número actual
  image.src = nuevaRuta;
}






function redirectToIndex(pagina) {
  window.location.href = pagina;
}


/*
function ocultarAlerta(){


  document.getElementById("alertaHorizontal").style.display = "none";




}
*/



function copiarCorreo() {


  let correo = document.getElementById('correo');






}


function copiarTexto(event) {


  correoCopiado();

  // Crear un elemento de textarea temporal
  var textarea = document.createElement('textarea');
  textarea.value = "nerijuarez@gmail.com";



  // Agregar el elemento al cuerpo del documento
  document.body.appendChild(textarea);

  // Seleccionar y copiar el contenido del textarea
  textarea.select();
  document.execCommand('copy');

  // Eliminar el textarea temporal
  document.body.removeChild(textarea);

  // Mostrar la alerta flotante
  var alerta = document.getElementById('alerta');
  alerta.innerText = 'Correo copiado';
  alerta.classList.add('mostrar');

  // Ocultar la alerta después de 3 segundos
  setTimeout(function () {
    alerta.classList.remove('mostrar');
  }, 1200);
}



function correoCopiado() {


  let copiar = document.getElementById('copiar');


  copiar.style.backgroundColor = 'grey';






}






const button = document.querySelector('.copy-button');

button.addEventListener('click', function() {
  button.classList.add('copied');
});



