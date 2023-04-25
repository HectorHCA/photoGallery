
 src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"

    $(document).ready(function(){
        $('.zoom').hover(function() {
            $(this).addClass('transition');
        }, function() {
            $(this).removeClass('transition');
        });
    });

    








        function a(t) {
        e.state.isHistoryEnabled && (t.preventDefault(), history.pushState({}, "", t.currentTarget.href))
            }


    

            function openOverlayH(imageUrl) {
                var overlay = document.getElementById('overlayH');
                var overlayImage = document.getElementById('overlayImageH');
                var closeButton = document.getElementById('closeButton');
                
                overlayImage.src = imageUrl;
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
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
                
                overlayImage.src = imageUrl;
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                
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


        


