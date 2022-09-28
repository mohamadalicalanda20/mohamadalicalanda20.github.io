var menuEl = document.getElementById('option-el')
menuEl.style.maxHeight = "0px"
var imageEl = document.getElementById('image-el')
var barEl = document.getElementById('bar-el')

        function toggleMenu(){
            if(menuEl.style.maxHeight == "0px"){
                menuEl.style.maxHeight = "160px"
                imageEl.style.marginTop = "175px"
                barEl.style.transform="rotate(90deg)"
            }
            else{
                menuEl.style.maxHeight = "0px"
                imageEl.style.marginTop = "20px"
                barEl.style.transform="rotate(0deg)"
            }
        }