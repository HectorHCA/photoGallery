

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



/*  ESTE SIVE PARA CERRAR EL OVERLAY SOLO EN CASO DE PULSAR EL BOTON DE CERRADO , EN EL RESTO DE CASOS NO SE CIERRA




function openOverlayH(imageUrl) {
    console.log("abriendo foto HORIZONTAL");
    var overlay = document.getElementById('overlayH');
    var overlayImage = document.getElementById('overlayImageH');
    var closeButton = document.getElementById('closeButtonH');

    overlayImage.onload = function () {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    overlayImage.src = imageUrl;

    closeButton.onclick = function (event) {
        event.stopPropagation(); // Evita que el evento se propague a elementos padre
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openOverlayV(imageUrl) {
    console.log("abriendo foto VERTICAL");
    var overlay = document.getElementById('overlayV');
    var overlayImage = document.getElementById('overlayImageV');
    var closeButton = document.getElementById('closeButtonV');

    overlayImage.onload = function () {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    overlayImage.src = imageUrl;

    closeButton.onclick = function (event) {
        event.stopPropagation(); // Evita que el evento se propague a elementos padre
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('click', function (event) {
    var overlayH = document.getElementById('overlayH');
    var overlayV = document.getElementById('overlayV');

    if (event.target !== overlayH && event.target !== overlayV) {
        overlayH.style.display = 'none';
        overlayV.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



*/










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
    
  
    submenu.classList.remove('visible'); // Quita la clase "visible" para ocultar el submenú
    fotos.style.transform = "translateY(0)"; // Reinicia la posición del .row

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