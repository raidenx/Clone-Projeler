const fa = document.querySelector(".fa-search");


const input = document.getElementById("input");


input.addEventListener('click', () => {
        
            fa.style.visibility = "hidden"
       
       

})

window.onclick = function(event) {
    if (event.target !== input) {
        fa.style.visibility = "visible";
    }
}


