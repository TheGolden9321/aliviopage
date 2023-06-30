"use strict";
document.addEventListener('click', function(event){
    if(event.target.closest(".menu__burger")){
        document.documentElement.classList.toggle("activated")
    }
});
