
            function openOverlayH(imageUrl) {
                var overlay = document.getElementById('overlayH');
                var overlayImage = document.getElementById('overlayImageH');
                var closeButton = document.getElementById('closeButton');
            
                overlayImage.onload = function() {  // agregar evento load a la imagen del overlay
                    overlay.style.display = 'block';
                    /*
                    document.body.style.overflow = 'hidden';
                */
                }
                
                overlayImage.src = imageUrl;
            
                closeButton.onclick = function() {
                    overlay.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                
                overlay.onclick = function() {
                    overlay.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }                
            }
            


            function openOverlayV(imageUrl) {
                var overlay = document.getElementById('overlayV');
                var overlayImage = document.getElementById('overlayImageV');
                var closeButton = document.getElementById('closeButton');
            
                overlayImage.onload = function() {  // agregar evento load a la imagen del overlay
                    overlay.style.display = 'block';
                    /*
                    document.body.style.overflow = 'hidden';
                    */
                }
                
                overlayImage.src = imageUrl;
            
                closeButton.onclick = function() {
                    overlay.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                
                overlay.onclick = function() {
                    overlay.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }                
            }
            







            function abrirSubmenu(){


                var submenu = document.getElementById('sub');

                submenu.style.display = "block";


            }


            function cerrarSubMenu(){


                var submenu = document.getElementById('sub');

                submenu.style.display = "none";


            }


            

    

