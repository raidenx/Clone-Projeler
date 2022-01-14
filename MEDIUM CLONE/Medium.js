window.onscroll = function() {myFunction()};



function myFunction(){
    if ( document.documentElement.scrollTop < 417 ) {
       
       
        document.getElementById("animation").style.background = "black"
        document.getElementById("nav-Top").style.background = "#c4e2ff"
        document.getElementById("nav-Top").style.transition = "600ms"
       
      }
      else {
        document.getElementById("animation").style.background = "green";
        document.getElementById("nav-Top").style.background = "white"
        document.getElementById("animation").style.transition = "300ms"
        document.getElementById("nav-Top").style.transition = "600ms"
      } 
        
      }



